import { PhoneModel } from "../../entities";
import httpStatus from "http-status";
import { CreatePhoneDTO } from "../DTOs/CreatePhoneDTO";



export const createPhoneService = async ({
    customerName,
    customerPhoneNumber,
    phoneType,
    compliant,
    serviceChargeType,
    serviceChargeAmount }: CreatePhoneDTO) => {
    // const productExist = await PhoneModel.findOne({ customerName });
    // if (productExist) return { status: httpStatus.BAD_REQUEST, message: `phone with ${customerName} already exist`, data: null };

    const phone = await PhoneModel.create({
        customerName,
        customerPhoneNumber,
        phoneType,
        compliant,
        serviceChargeType,
        serviceChargeAmount
    });
    return { status: httpStatus.CREATED, message: `phone created successfully`, data: phone };
}