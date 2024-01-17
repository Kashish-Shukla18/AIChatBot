import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatCompletion } from "../controllers/chat-controller.js";
// Protectedc API
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion);
export default chatRoutes;
//# sourceMappingURL=chat_routes.js.map