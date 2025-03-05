import { model } from "../config/aiConfig";

import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

const standaloneQuestionTemplate = `Given a question, convert it to a standalone question.
  question: {question}
  stnadalone question:
`;

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const standaloneQuestionChain = standaloneQuestionPrompt
  .pipe(llm)
  .pipe(new StringOutputParser());

const chain = RunnableSequence.from([standaloneQuestionChain]);

//const response = chain.invoke
export const retrieveAIResponse = async (input) => {
  const response = await chain.invoke({
    question: input,
  });
};
