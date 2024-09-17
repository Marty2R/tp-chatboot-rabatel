import express from "express";
import chatbotController from "../controller/chatbotController.js";

const router = express.Router();

// Route to display all pizzas
router.get("/", chatbotController.chatbot);

router.post("/ai", chatbotController.search);

export default router;
