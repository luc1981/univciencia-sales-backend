import express from 'express';
import { handleChat } from '../controllers/chatController.js';

const router = express.Router();

// Cuando alguien envíe datos a /chat, se ejecuta la lógica
router.post('/chat', handleChat);

export default router;
