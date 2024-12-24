import { loginUser, resgisterUser } from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register", resgisterUser);
userRouter.post("/login", loginUser);

export default userRouter;
