import express from 'express';
import UserController from '../controllers/UserController';
import LoginController from '../controllers/LoginController';

class UserRouter {
    public express: express.Router
    public userController = new UserController();
    public loginController = new LoginController();

    constructor() {
        this.express = express();
        this.initRoutes();
    }

    private initRoutes() {
        this.express.post(`/user/insert`, this.userController.insertUserController);
        this.express.put(`/user/update/:id`, this.userController.updateUserController);
        this.express.delete(`/user/delete/:id`, this.userController.deleteUserController);
        this.express.get(`/users`, this.userController.getAllUserController);
        this.express.post('/user/login', this.loginController.loginUserController);
    }
}

export default new UserRouter().express
