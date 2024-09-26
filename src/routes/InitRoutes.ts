import express from 'express';
import PermissionRoutes from './PermissionRoutes';
import RoleRoutes from './RoleRoutes';
import UserRoutes from './UserRoutes';

class InitRoutes {
    public express: express.Router;

    constructor() {
        this.express = express();
        this.initPermissionRoutes();
    }

    private initPermissionRoutes() {
        this.express.use(PermissionRoutes);
        this.express.use(RoleRoutes);
        this.express.use(UserRoutes);
    }
}

export default new InitRoutes().express;
