
import express from 'express';
import { createConversation, getConversation, getMessage, saveMessage, upadateConversation } from '../controllers/chat.controller';

const router = express.Router();

router.get("/create-conversation",createConversation)
router.get("/get-conversation",getConversation);
router.post("/save-message",saveMessage);
router.post("/get-message/:conversationid",getMessage);
router.post("/update-conversation",upadateConversation);

export default router;