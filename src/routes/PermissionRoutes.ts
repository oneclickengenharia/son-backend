import express from "express";
import PermissionController from "../controllers/PermissionController";

class PermissionRoutes {
    public express: express.Router;
    public permissionController = new PermissionController();

    constructor(){
        this.express = express();
        this.initRoutes();
    }

    private initRoutes() {
        this.express.post(`/permission/insert`, this.permissionController.insertPermissionController);
        this.express.get(`/permission/list`, this.permissionController.getAllPermissionController);
        this.express.delete(`/permission/delete/:idPermission`, this.permissionController.deletePermissionController);
    }
}

export default new PermissionRoutes().express;
