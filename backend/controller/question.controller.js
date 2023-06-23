const { Question } = require("../models/questionModel");

const addQuestion = async (req, res) => {
    try {
      const data = req.body;
      const newQuestion = new Question(data);
      await newQuestion.save();
    //   await Question.insertMany();
        
      return res.send("yhn s ho gya h")
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
      if (data.length==0) {
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


  const myQuestions = async (req, res) => {
    try {
        const {level, course} = req.query
        const data = await Question.find({level, course})
        return res.json({
            error: false,
            data
        })
    } catch (error) {
        return res.json({
            error: true,
            message: error.message
        })
    }
}

  module.exports = {addQuestion, allQuestions, myQuestions}