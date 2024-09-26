import RoleRepository from "../repositories/RoleRepository";
import { IRole } from "../models/interface/IRole";

class RoleServices {
    public async insertRoleService(data: IRole) {
        try {
            if (!data) throw new Error(`params data null`);

            let operationPromisse: any;
            let rc: any;

            const roleRepository = new RoleRepository();
            operationPromisse = await roleRepository.insertRoleRepository(data);
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro insertRoleService: ${err}`);
        }
    }

    public async getAllRoleService() {
        try {
            let operationPromisse: any;
            let rc: any;

            const roleRepository = new RoleRepository();
            operationPromisse = await roleRepository.getAllRoleRepository();
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro getAllRoleService: ${err}`);
        }
    }

    public async deleteRoleService(idRole: string) {
        try {
            if (!idRole) throw new Error(`params idRole null`);

            let operationPromisse: any;
            let rc: any;

            const roleRepository = new RoleRepository();
            operationPromisse = await roleRepository.deleteRoleRepository(idRole);
            rc = operationPromisse;
            if (!rc) throw new Error(rc);

            return rc;

        } catch (err) {
            return (`Erro deleteRoleService: ${err}`);
        }
    }
}

export default RoleServices;
