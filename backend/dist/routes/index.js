import { Router } from "express";
import userRoutes from "./user_routes.js";
import chatRoutes from "./chat_routes.js";
const appRoutes = Router();
appRoutes.use("/user", userRoutes); //domain/api/v1/user
chatRoutes.use("/chats", userRoutes); //domain/api/v1/chats
export default appRoutes;
//# sourceMappingURL=index.js.map