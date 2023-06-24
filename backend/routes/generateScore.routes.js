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
        const requestBody = req.body;
        console.log("🚀 ~ file: generateScore.routes.js:19 ~ generateScoreRouter.post ~ requestBody:", requestBody)
        const data = req.body.data;
        console.log("🚀 ~ file: generateScore.routes.js:20 ~ generateScoreRouter.post ~ data:", data)
        var prompt = data.reduce((acc, { question, answer }) => {
            acc += `question: ${question}\nanswer: ${answer}\n`;
            return acc;
        }, '');
        prompt += "calculate correctness percentage of my answers and give average correctness score out 0f 100 of all the answers in JSON format";
        // console.log("🚀 ~ file: generateScore.routes.js:25 ~ generateScoreRouter.post ~ prompt:", prompt)
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `${prompt} `,
            temperature: 0
        })
        console.log({ response: response.data.choices[0].text });
        const responseObject = JSON.parse(response.data.choices[0].text)
        // console.log("🚀 ~ file: generateScore.routes.js:32 ~ generateScoreRouter.post ~ responseObject:", responseObject)
        return res.status(200).send({ response: response.data, responseObject: responseObject });
        // res.status(200).send({ response: response.data });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
        console.log(error);
        console.log(error.response.data.error);
    }
});

module.exports = {
    generateScoreRouter
};
