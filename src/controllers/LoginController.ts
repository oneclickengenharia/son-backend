import { Request, Response } from 'express';
import LoginService from '../services/LoginServices';

class LoginController {
    public async loginUserController(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const loginService = new LoginService();

            const execute = await loginService.loginUserService(email, password);

            return res.status(200).json(execute);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default LoginController;
