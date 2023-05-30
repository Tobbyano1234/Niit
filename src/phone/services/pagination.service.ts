import { PhoneModel } from "../../entities";
import httpStatus from "http-status";
import { GetPhoneTableDTO } from "../DTOs/PaginatioDTO";
import { pagination } from "../../shared/helpers/pagination";



export const getPhonePagination = async (GetPhoneTableDTO: GetPhoneTableDTO) => {
    const { page, limit: _limit } = GetPhoneTableDTO as GetPhoneTableDTO;
    const { skip, limit } = pagination(page, _limit)
    const phones = await PhoneModel.find().limit(limit).skip(skip);
    if (phones.length === 0) throw new Error(`you don't have any phone`);

    return { status: httpStatus.OK, message: `all phones fetched successfully`, data: phones };
};
