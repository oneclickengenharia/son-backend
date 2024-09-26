import { IUser } from "../models/interface/IUser";
import UserSchema from "../schemas/UserSchema";
import bcrypt from 'bcrypt';

class UserRepository {
    public async inserUserRepository(data: IUser) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = UserSchema.findOne({ email: data.email });
            rc = await operationPromisse;
            if (rc) throw new Error(`Já existe um usuario com esse email`);

            data.password = await this.cryptPassword(data.password);

            operationPromisse = UserSchema.create(data);
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao criar usuario`);
            const user = rc

            return ({
                status: 1,
                msg: `Usuario criado com sucesso`,
                data: user
            })
        } catch (err) {
            return (`Erro UserRepository: ${err}`);
        }
    }

    public async deleteUserRepository(idUser: string) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = UserSchema.find({_id: idUser});
            rc = await operationPromisse;
            if (!rc || rc.length == 0) throw new Error(`Usuário não encontrado com id`);

            operationPromisse = UserSchema.findOneAndDelete({_id: idUser});
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao deletar usuário`);
            const user = rc;

            return ({
                status: 1,
                msg: `Usuário deletado com sucesso`,
                data: user
            })

        } catch (err) {
            return (`Erro deleteUserRepository: ${err}`);
        }
    }

    public async getAllUserRepository() {
        try {
            let operationPromisse: any;
            let rc: any;
            operationPromisse = UserSchema.find({});
            rc = await operationPromisse;
            if (!rc || rc.length == 0) throw new Error(`Usuários não encontrado`);
            const users = rc;

            return ({
                status: 1,
                msg: `Usuário encontrados`,
                data: users
            })

        } catch (err) {
            return (`Erro getAllUserRepository: ${err}`);
        }
    }

    public async findByIdUserRepository(email: string) {
        try {
            let operationPromisse: any;
            let rc: any;
            operationPromisse = UserSchema.find({email: email});
            rc = await operationPromisse;
            if (!rc || rc.length == 0) throw new Error(`Usuários não encontrado`);
            const users = rc;

            return ({
                status: 1,
                msg: `Usuário encontrados`,
                data: users
            })

        } catch (err) {
            return (`Erro findByIdUserRepository: ${err}`);
        }
    }

    public async updateUserRepository(idUser: string, data: IUser) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = UserSchema.findOne({ _id: idUser });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Não existe um usário com esse id`);
            const user: IUser = rc;

            operationPromisse = UserSchema.findOneAndUpdate({
                email: data.email ? data.email : user.email,
                name: data.name ? data.name : user.name,
                password: data.password ? await this.cryptPassword(data.password) : user.password
            });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao criar usuario`);
            const userUpdate = rc;

            return ({
                status: 1,
                msg: `Usuario atualizado com sucesso`,
                data: userUpdate
            });
        } catch (err) {
            return (`Erro UserRepository: ${err}`);
        }
    }

    private async cryptPassword(password: string): Promise<string> {
        if (!password) return ``;
        
        const salt = await bcrypt.genSalt(7);
        const newPassword = bcrypt.hashSync(password, salt);

        return newPassword;
    }
}


export default UserRepository;
