const express = require('express')
const { connection } = require('./configs/dbConnection')
const { questionRouter } = require('./routes/question.routes')
const { scoreRouter } = require('./routes/score.routes')
const { userRouter } = require('./routes/user.routes')
const { createInterviewRouter } = require('./routes/createInterview.routes')
const { authMiddleware } = require('./middlewares/authMiddleware.middleware')
const { generateScoreRouter } = require('./routes/generateScore.routes')
require('dotenv').config()
const cors = require("cors")


const app = express()

app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    return res.send({ msg: "home route is working" })
})

app.use("/user", userRouter)
// ! below auth commented temporarily
// todo uncomment it 
// app.user(authMiddleware) 
app.use("/createInterview", createInterviewRouter)
app.use("/question", questionRouter)
app.use("/score", scoreRouter)
app.use("/compare", generateScoreRouter)
app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server running on port ${process.env.PORT}`);
})