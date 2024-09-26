import express from "express";
import RoleController from "../controllers/RoleController";

class RoleRoutes {
    public express: express.Router;
    public roleController = new RoleController();

    constructor(){
        this.express = express();
        this.initRoutes();
    }

    private initRoutes() {
        this.express.post(`/role/insert`, this.roleController.insertRoleController);
        this.express.get(`/role/list`, this.roleController.getAllRoleController);
        this.express.delete(`/role/delete/:idRole`, this.roleController.deleteRoleController);
    }
}

export default new RoleRoutes().express;
