import { baseRouter, baseValidation } from "../../../shared/api";
import { PhoneController } from "../controllers";
import phoneValidation from "../validations"


const { POST, GET, PUT, DELETE, router } = baseRouter();


POST("/", [baseValidation(phoneValidation.createPhone), PhoneController.createPhone]);
PUT("/:phoneID", [baseValidation(phoneValidation.updatePhone), PhoneController.updatePhone]);
DELETE("/:phoneID", [baseValidation(phoneValidation.deletePhone), PhoneController.deletePhone]);
GET("/:phoneID", [baseValidation(phoneValidation.getPhone), PhoneController.getPhoneByID]);
GET("/", [PhoneController.getAllPhones]);
GET("/pagination/all", [baseValidation(phoneValidation.getPagination), PhoneController.getPhonePagination]);

export default router;