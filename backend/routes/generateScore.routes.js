const express = require("express");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");


require("dotenv").config();

const generateScoreRouter = express.Router();

const configuration = new Configuration({
    organization: "org-ECC0jYP0q5OXDndbHkeWfsXx",
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);
// Route to compare questions and answers
generateScoreRouter.post("/", async (req, res) => {
    try {
        const messages = req.body.prompt;
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${messages} `,
            temperature: 0
        })
        console.log({ response: response.data.choices[0].text });
        res.status(200).send({ response: response.data });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
        console.log(error);
        console.log(error.response.data.error);
    }
});

module.exports = {
    generateScoreRouter
};
