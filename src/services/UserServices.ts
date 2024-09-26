import { IUser } from "../models/interface/IUser";
import UserRepository from "../repositories/UserRepository";

class UserService {
    public async insertUserService(data: IUser) {
        try {
            if (!data) return (`data not found`);
            let operationPromisse: any;
            let rc: any;

            const userRepository = new UserRepository();
            operationPromisse = await userRepository.inserUserRepository(data);
            rc = operationPromisse;
            if (!rc) throw new Error(`Erro ao criar usuário`);

            return rc
        } catch (err) {
            return (`Erro insertUserService: ${err}`);
        }
    }

    public async updateUserService(data: IUser, idUser: string) {
        try {
            if (!data) return (`data not found`);
            let operationPromisse: any;
            let rc: any;

            const userRepository = new UserRepository();
            operationPromisse = await userRepository.updateUserRepository(idUser, data);
            rc = operationPromisse;
            if (!rc) throw new Error(`Erro ao atualizar usuario`);

            return rc
        } catch (err) {
            return (`Erro updateUserService: ${err}`);
        }
    }

    public async deleteUserService(idUser: string) {
        try {
            if (!idUser) return (`idUser not found`);
            let operationPromisse: any;
            let rc: any;

            const userRepository = new UserRepository();
            operationPromisse = await userRepository.deleteUserRepository(idUser);
            rc = operationPromisse;

            return rc
        } catch (err) {
            return (`Erro deleteUserService: ${err}`);
        }
    }

    public async getAllUserService() {
        try {
            let operationPromisse: any;
            let rc: any;

            const userRepository = new UserRepository();
            operationPromisse = await userRepository.getAllUserRepository();
            rc = operationPromisse;

            return rc
        } catch (err) {
            return (`Erro dgetAllUserService: ${err}`);
        }
    }
}

export default UserService;
