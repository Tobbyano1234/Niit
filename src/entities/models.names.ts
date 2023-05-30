import { Phone } from "./Phone"

export enum ModelNames {
    PHONE = "phone"
}

export type ModelTypeMap = {
    [ModelNames.PHONE]: Phone
}