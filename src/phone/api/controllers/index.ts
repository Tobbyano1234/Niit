import { Request } from "express";
import { getAllPhonesService, getPhoneByIDService } from "../../services/getPhone.service";
import { BaseController } from "../../../shared/api";
import { CreatePhoneDTO } from "../../DTOs/CreatePhoneDTO";
import { createPhoneService } from "../../services/createPhone.service";
import { updatePhone } from "../../services/updatePhone.service";
import { UpdatePhoneDTO } from "../../DTOs/UpdatePhoneDTO";
import { DeletePhoneDTO } from "../../DTOs/DeletePhoneDTO";
import { deletePhone } from "../../services/deletePhone.service";
import { getPhonePagination } from "../../services/pagination.service";



export class PhoneController {
    static createPhone = BaseController(async (request: Request) => {
        const CreateProductDTO = request.body as CreatePhoneDTO;
        const { status, message, data } = await createPhoneService(CreateProductDTO);
        return { status, message, data };
    });

    static getPhoneByID = BaseController(async (request: Request) => {
        const phoneID = request.params.phoneID
        const { status, message, data } = await getPhoneByIDService({ phoneID });
        return { status, message, data };
    });

    static getAllPhones = BaseController(async (request: Request) => {
        const { status, message, data } = await getAllPhonesService();
        return { status, message, data };
    });

    static getPhonePagination = BaseController(async (request: Request) => {
        const GetProductTableDTO = request.query;
        const { status, message, data } = await getPhonePagination(GetProductTableDTO);
        return { status, message, data };
    });

    static updatePhone = BaseController(async (request: Request) => {
        const phoneID = request.params.phoneID;
        const UpdatePhoneDTO = { phoneID, ...request.body } as UpdatePhoneDTO;
        const { status, message, data } = await updatePhone(UpdatePhoneDTO);
        return { status, message, data };
    });

    static deletePhone = BaseController(async (request: Request) => {
        const phoneID = request.params.phoneID;
        const DeletePhoneDTO = { phoneID } as DeletePhoneDTO;
        const { status, message } = await deletePhone(DeletePhoneDTO);
        return { status, message };
    });
}