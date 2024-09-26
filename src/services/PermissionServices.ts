import PermissionRepository from "../repositories/PermissionRepository";
import { IPermission } from "../models/interface/IPermission";

class PermissionServices {
    public async insertPermissionService(data: IPermission) {
        try {
            if (!data) throw new Error(`params data null`);

            let operationPromisse: any;
            let rc: any;

            const permissionRepository = new PermissionRepository();
            operationPromisse = await permissionRepository.insertPermissionRepository(data);
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro insertPermissionService: ${err}`);
        }
    }

    public async getAllPermissionService() {
        try {
            let operationPromisse: any;
            let rc: any;

            const permissionRepository = new PermissionRepository();
            operationPromisse = await permissionRepository.getAllPermissionRepository();
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro getAllPermissionService: ${err}`);
        }
    }

    public async deletePermissionService(idPermission: string) {
        try {
            if (!idPermission) throw new Error(`params idPermission null`);

            let operationPromisse: any;
            let rc: any;

            const permissionRepository = new PermissionRepository();
            operationPromisse = await permissionRepository.deletePermissionRepository(idPermission);
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro deletePermissionService: ${err}`);
        }
    }
}

export default PermissionServices;
