const aiService = require("../Services/ai_services");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("prompt is required");
  }
  const response = await aiService(code);
//   console.log(response);
  res.send(response);
};
