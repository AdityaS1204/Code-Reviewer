const aiService = require('../Services/ai_services');

module.exports.getReview = async (req,res)=>{
    const code = req.body.code;
    console.log(process.env.GEMINI_API_KEY)

    if(!code){
        return res.status(400).send("prompt is required");
    }
    const response = await aiService(code);
    // console.log(response)
}