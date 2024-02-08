import express from "express";
import { AuthenticationController } from "./auth.controller";
import { AuthValidation } from "./auth.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
    '/login', 
    validateRequest(AuthValidation.loginZodSchema),
    AuthenticationController.loginUser);

router.post(
    '/refresh-token', 
    validateRequest(AuthValidation.refreshTokenZodSchema),
    AuthenticationController.refreshToken);

    router.post(
        '/change-password', 
        validateRequest(AuthValidation.changePasswordZodSchema),
        AuthenticationController.changePassword);


export const AuthRoutes = router