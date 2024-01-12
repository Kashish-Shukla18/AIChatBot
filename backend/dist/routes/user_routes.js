import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controller.js";
import { validate, signupValidator, loginValidator } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userSignup);
export default userRoutes;
//# sourceMappingURL=user_routes.js.map