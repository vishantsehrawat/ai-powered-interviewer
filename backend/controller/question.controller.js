const { Question } = require("../models/questionModel");

const addQuestion = async (req, res) => {
  req.body.questionUniqueId = uuidv4();

  try {
    const data = req.body;
    const newQuestion = new Question(data);
    await newQuestion.save();
    // await Question.insertMany();

    return res.json({
      error: false,
      message: "successfully added new question"
    })
  } catch (error) {
    return res.json({
      error: true,
      message: error.message,
    });
  }
}

const allQuestions = async (req, res) => {
  try {
    const data = await Question.find();
    // console.log("🚀 ~ file: question.controller.js:36 ~ allQuestions ~ data:", data)
    if (data.length == 0) {
      return res.status(404).json({
        error: true,
        message: "data not found",
      });
    } else {
      return res.json({
        error: false,
        data,
        lngth: data.length
      });
    }
  } catch (error) {
    return res.json({
      error: true,
      message: error.message,
    });
  }
}

// we are sending only 10 random questions on request
const myQuestions = async (req, res) => {
  try {
    const { level, course } = req.query
    // console.log("🚀 ~ file: question.controller.js:50 ~ myQuestions ~ req.query:", req.query)
    const data = await Question.find({ level, course })
    // console.log("🚀 ~ file: question.controller.js:54 ~ myQuestions ~ data:", data.length)
    const randomQuestions = data.sort(() => 0.5 - Math.random()).slice(0, 10); // Randomly select 10 questions

    return res.json({
      error: false,
      data: randomQuestions
    })
  } catch (error) {
    return res.json({
      error: true,
      message: error.message,
    })
  }
}



module.exports = { addQuestion, allQuestions, myQuestions }











