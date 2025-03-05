import getAIAnswer from "../controllers/aiController.js";

import express from "express";

const router = express.Router();

router.get("/fetchAIAnswer", getAIAnswer);

export default router;
