import express from "express";
import { getUsers, postNewUser } from "../controller/userController";
import validate from "../middlewares/validate";
import { addUserSchema } from "../zod-Schema/zodSchema";

const userRouter = express.Router();

userRouter.get(`/`, getUsers);
userRouter.post(`/`, validate(addUserSchema), postNewUser);

export default userRouter;