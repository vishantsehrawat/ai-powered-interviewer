const express = require("express");
const { Question } = require("../models/questionModel");
const { addQuestion, allQuestions, myQuestions } = require("../controller/question.controller");
const { uuidv4 } = require("../configs/uuidGenerator");


const questionRouter = express.Router();

questionRouter.post("/addQuestion", addQuestion);

questionRouter.get("/get", allQuestions);

questionRouter.get("/myQuestions", myQuestions)

// adding unique id to questions which dont have unique id vishant 
questionRouter.post('/add-question-unique-id', async (req, res) => {
    try {
        const questions = await Question.find({ questionUniqueId: { $exists: false } });

        if (questions.length > 0) {
            const updatedQuestions = questions.map((question) => {
                question.questionUniqueId = uuidv4();
                return question;
            });

            await Promise.all(updatedQuestions.map((question) => question.save()));

            res.json({ message: 'Question unique IDs added successfully.' });
        } else {
            res.json({ message: 'All questions already have a questionUniqueId.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding question unique IDs.' });
    }
});

module.exports = { questionRouter };



