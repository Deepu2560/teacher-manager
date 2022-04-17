const express = require("express");

const Class = require("../Models/class_model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Class.create(req.body);

    console.log("Class added");

    res.status(202).send(user);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Class.find().lean().exec();

    console.log("Getting all documents of Classes");

    res.status(200).send(user);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
