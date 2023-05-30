import httpStatus from "http-status";
import { PhoneModel } from "../../entities";
import { DeletePhoneDTO } from "../DTOs/DeletePhoneDTO";
import { getPhoneByIDService } from "./getPhone.service";

export const deletePhone = async (DeletePhoneDTO: DeletePhoneDTO) => {
    const { phoneID } = DeletePhoneDTO;
    const { data: phone } = await getPhoneByIDService({ phoneID });
    const { _id } = phone;
    const deletedPhone = await PhoneModel.findByIdAndDelete(_id);
    return { status: httpStatus.OK, message: `phone deleted successfully`, data: deletedPhone }
}