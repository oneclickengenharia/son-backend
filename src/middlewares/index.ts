import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class Middlewares {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.init();
        console.log('middlewares running...');

    }

    private init() {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new Middlewares().express
