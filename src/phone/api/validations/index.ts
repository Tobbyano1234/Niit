import { Joi } from "celebrate";
import { toObjectId } from "../../../shared/helpers/validateToObjectId";


export default {
    createPhone: {
        body: Joi.object({
            customerName: Joi.string().required(), 
            customerPhoneNumber: Joi.string().required(), 
            phoneType: Joi.string().required(), 
            compliant: Joi.string().required(), 
            serviceChargeType: Joi.string().required(), 
            serviceChargeAmount: Joi.number().required(),
        })
    },
    getPhone: {
        params: {
            phoneID: Joi.string().custom(toObjectId).required(),
        }
    },
    updatePhone: {
        body: Joi.object({
            customerName: Joi.string().required(),
            customerPhoneNumber: Joi.string().required(),
            phoneType: Joi.string().required(),
            compliant: Joi.string().required(),
            serviceChargeType: Joi.string().required(),
            serviceChargeAmount: Joi.number().required(),
            repairStatus: Joi.string().required(),
        }),
        params: {
            phoneID: Joi.string().custom(toObjectId).required(),
        }
    },

    deletePhone: {
        params: {
            phoneID: Joi.string().custom(toObjectId).required(),
        }
    },
    getPagination: {
        query: {
            page: Joi.number(),
            limit: Joi.number(),
        }
    },
};