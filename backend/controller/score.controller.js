const { Score } = require("../models/score.model")

const getAllScores = async (req, res) => {
    try {
        const data = await Score.find()
        if(data.length==0){
            return res.json({
                error: true,
                message: "Data not found"
            })
        }else{
            return res.json({
                error: false,
                data
            })
        }        
    } catch (error) {
        return res.json({
            error: true,
            message: error.message
        })
    }
}

const myScores = async (req, res) => {
    try {
        const {id} = req.params
        const data = await Score.find({userId: id})
        if(data.lenght==0){
            return res.json({
                error: true,
                message: "data not found"
            })
        }else{
            return res.json({
                error: false,
                data
            })
        } 
    } catch (error) {
        return res.json({
            error: true,
            message: error.message
        })
    }
}

module.exports = {getAllScores, myScores}