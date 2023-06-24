const express = require("express");
const { Question } = require("../models/questionModel");
const { addQuestion, allQuestions, myQuestions } = require("../controller/question.controller");

const questionRouter = express.Router();

questionRouter.post("/addQuestion", addQuestion);

questionRouter.get("/get", allQuestions);

questionRouter.get("/myQuestions", myQuestions)

module.exports = { questionRouter };



