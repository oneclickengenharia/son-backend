import PermissionSchema from "../schemas/PermissionSchema";
import { IPermission } from "../models/interface/IPermission";

class Permissionpository {
    public async insertPermissionRepository(data: IPermission) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = PermissionSchema.find({ name: data.name });
            rc = await operationPromisse;
            if (rc.length >= 1) throw new Error(`Já existe uma Permission cadastrada com esse nome`);

            operationPromisse = PermissionSchema.create(data);
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao criar uma Permission`);

            return ({
                status: 1,
                msg: `Permission criado com sucesso`,
                data: rc
            })

        } catch (err) {
            return (`Erro insertPermissionRepository: ${err}`);
        }
    }

    public async getAllPermissionRepository() {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = PermissionSchema.find();
            rc = await operationPromisse;
            if (!rc || rc.length == 0) throw new Error(`Não existe Permission criados no sistema`);

            return ({
                status: 1,
                msg: `Lista de Permissions`,
                list: rc
            });

        } catch (err) {
            return (`Erro getAllPermissionRepository: ${err}`);
        }
    }

    public async deletePermissionRepository(idPermission: string) {
        try {
            let operationPromisse: any;
            let rc: any;

            operationPromisse = PermissionSchema.findOne({ _id: idPermission });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Não existe Permission com esse id`);

            operationPromisse = PermissionSchema.findOneAndDelete({ _id: idPermission });
            rc = await operationPromisse;
            if (!rc) throw new Error(`Erro ao deletar Permission`);

            return ({
                status: 1,
                msg: `Permission deletada com sucesso`,
                data: rc
            });

        } catch (err) {
            return (`Erro deletePermissionRepository: ${err}`);
        }
    }
}

export default Permissionpository;
