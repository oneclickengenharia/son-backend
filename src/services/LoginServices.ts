import LoginRepository from "../repositories/LoginRepository";

class LoginService {
    public async loginUserService(email: string, password: string) {
        try {
            if (!email) throw new Error(`Params email não enviado`);
            if (!password) throw new Error(`Params password não enviado`);

            let operationPromisse: any;
            let rc: any;

            const loginRepository = new LoginRepository();
            operationPromisse = await loginRepository.loginUserRepository(email, password);
            rc = operationPromisse;
            if (!rc) throw new Error(`Erro loginUserService: loginUserRepository: ${rc}`);

            return rc;
        } catch (err) {
            return (`Erro loginUserService: ${err}`);
        }
    }
}

export default LoginService;
