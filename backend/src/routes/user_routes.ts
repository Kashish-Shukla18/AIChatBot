import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controller.js";
import {validate,signupValidator,loginValidator} from "../utils/validators.js"
import { verifyToken } from "../utils/token_manager.js";

const userRoutes=Router();
userRoutes.get("/",getAllUsers);
userRoutes.post("/signup",validate(signupValidator),userSignup);
userRoutes.post("/login",validate(loginValidator),userLogin);
userRoutes.get("/auth-status",verifyToken,userLogin);
export default userRoutes; 