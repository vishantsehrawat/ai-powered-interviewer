const express = require("express");
const axios = require("axios");

require("dotenv").config();

const generateScoreRouter = express();
// Route to compare questions and answers
generateScoreRouter.post("/", async (req, res) => {
    try {
        const messages = req.body.messages;

        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                "model": "text-davinci-003",
                "prompt": "capital of india",
                "max_tokens": 7,
                "temperature": 0,
                "top_p": 1,
                "n": 1,
                "stream": false,
                "logprobs": null,
                "stop": "\n"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GPT_API_KEY}`,
                },
            }
        );

        res.status(200).json({ response: response.data });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
        console.log(error);
        console.log(error.response.data.error);
    }
});

module.exports = {
    generateScoreRouter
};
