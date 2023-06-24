const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
    uniqueUserId: {
        type: String,
        // required: true,
    },
    uniqueInterviewId: {
        type: String,
        required: true,
        unique: true
    },
    questionAnswers: [
        {
            question: String,
            answer: String,
        }
    ],
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

const InterviewModel = mongoose.model("Interview", interviewSchema);

module.exports = { InterviewModel };
