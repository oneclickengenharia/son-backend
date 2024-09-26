import express from 'express';
import middlewares from './middlewares';
import dotenv from 'dotenv';
import DB from './db';

import InitRoutes from './routes/InitRoutes';

dotenv.config();

class Server {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.express.use(middlewares);

        const db = new DB();
        db.mongooseConnect();

        this.initRoutes();
    }

    private initRoutes() {
        this.express.use(InitRoutes);
    }
}

export default new Server().express
