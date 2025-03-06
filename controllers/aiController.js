import { retrieveAIResponse } from "../services/aiModel.js";

const getAIAnswer = async (req, res) => {
  res.set("content-type", "application/json");
  res.json({ message: "Here is your AI answer" });
  // console.log(req.body);

  // Reach out to db when set up

  // Send user input to AI and retreive answer to send back to the user
  retrieveAIResponse(req.body);
};

export default getAIAnswer;
