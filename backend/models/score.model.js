const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    userId: String,
    score: String,

    course: {
        type: String, 
        enum: ["Node", "Java", "MERN"]
    },
    level: {
        type: String,
        enum: ["beginner", "intermediate", "expert"]  
    },
    date: {

        type: Date, default: Date.now()
    }

});

const Score = mongoose.model("score", scoreSchema);

module.exports = { Score };
