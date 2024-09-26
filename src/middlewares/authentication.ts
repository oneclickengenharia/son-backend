import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IUser } from "../models/interface/IUser";

class Authentication {
    public authenticationToken(req: Request, res: Response) {
        try {
            const auth = req.headers.authorization;
            const token = auth?.split(' ')[1];

            if (!token) return res.sendStatus(401)

            jwt.verify(token, `${process.env.MY_SECRET}`, (err, user) => {
                if (err) return res.sendStatus(403)
                req.user = user as IUser;
                return ({ auth: true });
            });

        } catch (err) {
            return res.status(500)
        }
    }
}

export default Authentication
