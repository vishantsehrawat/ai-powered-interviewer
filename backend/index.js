const express = require('express')
const connection = require('./configs/dbConnection')
const { questionRouter } = require('./routes/question.route')
const { scoreRouter } = require('./routes/score.route')
require('dotenv').config()
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("route is working")
})

app.use("/question", questionRouter)
app.use("/score", scoreRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server running on port ${process.env.PORT}`);
})