import { Request, Response } from 'express';
import PermissionServices from "../services/PermissionServices";
import Authentication from '../middlewares/authentication';

class PermissionController {
    public async insertPermissionController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const data = req.body;

            const permissionService = new PermissionServices();

            const execute = await permissionService.insertPermissionService(data);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async getAllPermissionController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const permissionService = new PermissionServices();

            const execute = await permissionService.getAllPermissionService();

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }

    public async deletePermissionController(req: Request, res: Response) {
        try {

            const authentication = new Authentication();
            authentication.authenticationToken(req, res);

            const { idPermission } = req.params;

            const permissionService = new PermissionServices();

            const execute = await permissionService.deletePermissionService(idPermission);

            return res.status(200).json(execute);

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default PermissionController;
