

export type UpdatePhoneDTO = { phoneID: string } & Partial<{
    customerName: string;
    customerPhoneNumber: string;
    phoneType: string;
    compliant: string;
    serviceChargeType: string;
    serviceChargeAmount: number;
    repairStatus: string;
}>;
