import getAIAnswer from "../controllers/aiController.js";

import express from "express";

const router = express.Router();

router.post("/fetchAIAnswer", getAIAnswer);

export default router;
