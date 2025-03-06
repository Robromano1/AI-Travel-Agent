import { model } from "../config/aiConfig.js";

import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

const standaloneQuestionTemplate = `Given a departing destination and an arrival destination, create a standalone question.
  Model your question based on the example between the ###.
  ###
  I am traveling from New York to Florida. What are the best flights?
  ###
  departing destination: {departing_destination}
  arrival destination: {arriving_destination}
  stnadalone question:`;

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
  standaloneQuestionTemplate
);

const standaloneQuestionChain = standaloneQuestionPrompt
  .pipe(model)
  .pipe(new StringOutputParser());

// console.log(standaloneQuestionChain);

const chain = RunnableSequence.from([
  standaloneQuestionChain,
  (prevResult) => console.log(prevResult),
]);

//await chain.invoke()

//const response = chain.invoke
export const retrieveAIResponse = async (input) => {
  // INPUT = { departingDestination: 'NY', arrivingDestination: 'FL' }
  const { departingDestination, arrivingDestination } = input;
  console.log(arrivingDestination);
  const response = await chain.invoke({
    departing_destination: departingDestination,
    arriving_destination: arrivingDestination,
  });
};
