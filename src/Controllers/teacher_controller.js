const express = require("express");

const mongoose = require("mongoose");

const Teacher = require("../Models/teacher_model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Teacher.create(req.body);

    console.log("Teacher added");

    res.status(202).send(user);
  } catch (error) {
    console.log("ERROR:", error);
    res.send(500).send(error);
  }
});

router.get("", async (req, res) => {
  try {
    const user = await Teacher.find().lean().exec();

    console.log("Showing all documents of teacher");

    res.status(200).send(user);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
