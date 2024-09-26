import { Request, Response } from 'express';
import RoleServices from "../services/RoleServices";
import Authentication from '../middlewares/authentication';

class RoleController {
    public async insertRoleController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const data = req.body;

            const roleService = new RoleServices();

            const execute = await roleService.insertRoleService(data);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async getAllRoleController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const roleService = new RoleServices();

            const execute = await roleService.getAllRoleService();

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async deleteRoleController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const { idRole } = req.params;

            const roleService = new RoleServices();

            const execute = await roleService.deleteRoleService(idRole);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default RoleController;
