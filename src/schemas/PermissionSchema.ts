import mongoose, { Schema, model } from 'mongoose';
import { IPermission } from '../models/interface/IPermission';

const Permission = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    roles: [
        {
            type: Schema.Types.ObjectId
        }
    ]
}, {
    timestamps: true
});

export default model<IPermission>("Permission", Permission);
