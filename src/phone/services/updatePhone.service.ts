import httpStatus from "http-status";
import { PhoneModel } from "../../entities";
import { UpdatePhoneDTO } from "../DTOs/UpdatePhoneDTO";
import { getPhoneByIDService } from "./getPhone.service";

export const updatePhone = async (UpdatePhoneDTO: UpdatePhoneDTO) => {
    const { phoneID, customerName,
        customerPhoneNumber,
        phoneType,
        compliant,
        serviceChargeType,
        serviceChargeAmount, repairStatus } = UpdatePhoneDTO;
    let newCustomerName: string, newCustomerPhoneNumber: string, newPhoneType: string, newCompliant: string, newServiceChargeType: string, newServiceChargeAmount: number, newRepairStatus:string;
    const { data: phone } = await getPhoneByIDService({ phoneID });
    const { _id, customerName: _customerName,
        customerPhoneNumber: _customerPhoneNumber,
        phoneType: _phoneType,
        compliant: _compliant,
        serviceChargeType: _serviceChargeType,
        serviceChargeAmount: _serviceChargeAmount, repairStatus: _repairStatus } = phone;
    newCustomerName = customerName || _customerName;
    newCustomerPhoneNumber = customerPhoneNumber || _customerPhoneNumber;
    newPhoneType = phoneType || _phoneType;
    newCompliant = compliant || _compliant;
    newServiceChargeType = serviceChargeType || _serviceChargeType;
    newServiceChargeAmount = serviceChargeAmount || _serviceChargeAmount;
    newRepairStatus = repairStatus || _repairStatus;
    const updatedPhone = await PhoneModel.findByIdAndUpdate(_id, {
        customerName: newCustomerName,
        customerPhoneNumber: newCustomerPhoneNumber,
        phoneType: newPhoneType,
        compliant: newCompliant,
        serviceChargeType: newServiceChargeType,
        serviceChargeAmount: newServiceChargeAmount,
        repairStatus: newRepairStatus
    }, { new: true });
    return { status: httpStatus.OK, message: `phone updated successfully`, data: updatedPhone }
}