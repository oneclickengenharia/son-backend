import UserSchema from "../schemas/UserSchema";
import { IUser } from "../models/interface/IUser";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class LoginRepository {
    public async loginUserRepository(email: string, password: string) {
        try {

            let operationPromisse: any;
            let rc: any;

            operationPromisse = UserSchema.findOne({ email: email });
            rc = await operationPromisse;
            if (!rc) return ({ status: 0, msg: `Usárrio não encontrado` });
            const user: IUser = rc;

            const validatePassword = await bcrypt.compare(password, user.password)

            if (!validatePassword) return ({ status: 0, msg: 'Password não confere com email' });
            if (validatePassword) {
                const payload = { email };
                const token = jwt.sign(payload, `${process.env.MY_SECRET}`, {
                    expiresIn: '24h'
                })

                return ({
                    status: 1,
                    msg: `Usuário logado!`,
                    token: token,
                    auth: true,
                    id: user._id
                })
            }

        } catch (err) {
            return (`Erro loginUserRepository: ${err}`)
        }
    }
}

export default LoginRepository;
