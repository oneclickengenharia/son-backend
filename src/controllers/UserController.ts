import { Request, Response } from "express";
import UserService from "../services/UserServices";
import { IUser } from "../models/interface/IUser";
import Authentication from '../middlewares/authentication'

class UserController {
    public async insertUserController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const data = req.body;

            const userService = new UserService();

            const execute = await userService.insertUserService(data);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async updateUserController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const data = req.body;
            const { id } = req.params;

            const userService = new UserService();

            const execute = await userService.updateUserService(data, id);
            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async deleteUserController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const { id } = req.params;

            const userService = new UserService();

            const execute = await userService.deleteUserService(id);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async getAllUserController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const userService = new UserService();

            const execute = await userService.getAllUserService();

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default UserController;
