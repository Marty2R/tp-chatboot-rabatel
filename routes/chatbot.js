import express from "express";
import chatbotController from "./chatbotController.js";

const router = express.Router();

// Route to display all pizzas
router.get("/", chatbotController.chatbot);

export default router;
