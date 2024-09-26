import { Schema, model } from "mongoose";
import { IRole } from './../models/interface/IRole'

const Role = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

export default model<IRole>("Roles", Role);
