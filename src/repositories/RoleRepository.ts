import RolesSchema from "../schemas/RolesSchema";
import { IRole } from "../models/interface/IRole";

class RoleRepository {
    public async insertRoleRepository(data: IRole) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = RolesSchema.find({ name: data.name });
            rc = await operationPromisse;
            if (rc.length >= 1) throw new Error(`Já existe uma role cadastrada com esse nome`);

            operationPromisse = RolesSchema.create(data);
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao criar uma role`);

            return ({
                status: 1,
                msg: `Role criado com sucesso`,
                data: rc
            })

        } catch (err) {
            return (`Erro insertRoleRepository: ${err}`);
        }
    }

    public async getAllRoleRepository() {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = RolesSchema.find();
            rc = await operationPromisse;
            if (!rc || rc.length == 0) throw new Error(`Não existe role criados no sistema`);

            return ({
                status: 1,
                msg: `Lista de roles`,
                list: rc
            });

        } catch (err) {
            return (`Erro getAllRoleRepository: ${err}`);
        }
    }

    public async deleteRoleRepository(idRole: string) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = RolesSchema.findOne({ _id: idRole });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Não existe role com esse id`);

            operationPromisse = RolesSchema.findOneAndDelete({ _id: idRole });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao deletar role`);

            return ({
                status: 1,
                msg: `Role deletada com sucesso`,
                data: rc
            });

        } catch (err) {
            return (`Erro deleteRoleRepository: ${err}`);
        }
    }
}

export default RoleRepository;
