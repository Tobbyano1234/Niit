import httpStatus from "http-status";
import { PhoneModel } from "../../entities";
import { GetPhoneDTO } from "../DTOs/GetPhoneDTO";


export const getPhoneByIDService = async ({ phoneID }: GetPhoneDTO) => {
    const singlePhone = await PhoneModel.findOne({ _id: phoneID });
    if (!singlePhone) throw new Error(`phone with ${phoneID} does not exist`);

    return { status: httpStatus.OK, message: `phone fetched successfully`, data: singlePhone };
};

export const getAllPhonesService = async () => {
    const phones = await PhoneModel.find();
    if (phones.length === 0) throw new Error(`you don't have any phone`);

    return { status: httpStatus.OK, message: `all phones fetched successfully`, data: phones };
};
