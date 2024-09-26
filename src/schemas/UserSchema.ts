import { model, Schema } from 'mongoose';
import { IUser } from '../models/interface/IUser';

const User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    permission: {
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true
});

export default model<IUser>('User', User);
