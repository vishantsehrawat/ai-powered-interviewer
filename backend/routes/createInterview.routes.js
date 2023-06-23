const express = require("express");
const { InterviewModel } = require("../models/createInterview.model");
const createInterviewRouter = express.Router();

// Create a new interview
createInterviewRouter.post("/create", async (req, res) => {
  try {
    const newInterview = new InterviewModel(req.body);
    const savedInterview = await newInterview.save();
    res.status(200).json({ interview: savedInterview });
  } catch (error) {
    res.status(500).json({ error: "Failed to create interview" });
  }
});

// Update an existing interview
createInterviewRouter.patch("/update/:id", async (req, res) => {
  try {
    const interviewId = req.params.id;
    const updatedInterview = await InterviewModel.findByIdAndUpdate(
      interviewId,
      req.body,
      { new: true }
    );
    res.status(200).json({ interview: updatedInterview });
  } catch (error) {
    res.status(500).json({ error: "Failed to update interview" });
  }
});

// Delete an interview
createInterviewRouter.delete("/delete/:id", async (req, res) => {
  try {
    const interviewId = req.params.id;
    await InterviewModel.findByIdAndDelete(interviewId);
    res.status(200).json({ message: "Interview deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete interview" });
  }
});

// Fetch all interviews
createInterviewRouter.get("/get", async (req, res) => {
  try {
    const fetchedInterviews = await InterviewModel.find();
    res.status(200).json({ interviews: fetchedInterviews });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch interviews" });
  }
});

module.exports = {createInterviewRouter};
