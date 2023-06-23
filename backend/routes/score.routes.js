const mongoose = require('mongoose')
const express = require('express')
const { getAllScores, myScores, setScore } = require('../controller/score.controller')

const scoreRouter = express.Router()

scoreRouter.get("/", getAllScores)
scoreRouter.get("/myScore/:id", myScores)
scoreRouter.post("/addScore/:id", setScore)

module.exports = {scoreRouter}