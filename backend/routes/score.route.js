const mongoose = require('mongoose')
const express = require('express')
const { getAllScores, myScores } = require('../controller/score.controller')

const scoreRouter = express.Router()

scoreRouter.get("/", getAllScores)
scoreRouter.get("/myScore/:id", myScores)

module.exports = {scoreRouter}