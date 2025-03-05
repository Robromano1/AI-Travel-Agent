import aiRouter from "./Routes/aiRoutes.js";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//Routes
app.use(aiRouter);

export default app;
