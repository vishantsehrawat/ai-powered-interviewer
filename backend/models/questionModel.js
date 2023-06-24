const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionUniqueId:{
    type:String, 
    unique :true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    enum: ["Node", "Java", "MERN"],
    required: true,
  },
  level: {
    type: String,
    enum: ["beginner", "intermediate", "expert"],
    required: true,
  },
  wordLimit: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = { Question };
