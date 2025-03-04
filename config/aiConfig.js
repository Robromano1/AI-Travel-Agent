import { ChatOpenAI } from "@langchain/openai";

const openAIApiKey = process.env.OPENAI_API_KEY;

export const model = new ChatOpenAI({ openAIApiKey });
