const getAIAnswer = (req, res) => {
  res.set("content-type", "application/json");
  res.json({ message: "Here is your AI answer" });
  // Reach out to db when set up

  // Send user input to AI and retreive answer to send back to the user
};

export default getAIAnswer;
