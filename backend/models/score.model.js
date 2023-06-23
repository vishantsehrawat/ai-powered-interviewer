const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    userId: String,
    score: Number,
    course: {
        type: String, 
        enum: ["Node", "Java", "MERN"]
    },
    level: {
        type: String,
        enum: ["beginner", "intermediate", "expert"]  
    },
    date: String
});

const Score = mongoose.model("score", scoreSchema);

module.exports = { Score };
