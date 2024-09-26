import { IUser } from "../models/interface/IUser";

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}