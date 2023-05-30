import { Document, Schema, model } from "mongoose";
import { ModelNames } from "./models.names";

export class Phone extends Document {
    customerName: string;
    customerPhoneNumber: string;
    phoneType: string;
    compliant: string;
    serviceChargeType: string;
    serviceChargeAmount: number;
    repairStatus: string;
};

const PhoneSchema = new Schema({
    customerName: { type: String, required: true },
    customerPhoneNumber: { type: String, required: true },
    phoneType: { type: String, required: true },
    compliant: { type: String, required: true },
    serviceChargeType: { type: String, required: true },
    serviceChargeAmount: { type: Number, required: true },
    repairStatus: { type: String, enum:["pending", "completed"] },
},
    { timestamps: true },
);

export const PhoneModel = model<Phone>(ModelNames.PHONE, PhoneSchema);
