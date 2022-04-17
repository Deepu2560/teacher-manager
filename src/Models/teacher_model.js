const mongoose = require("mongoose");

const teacherschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Teacher = mongoose.model("teacher", teacherschema);

module.exports = Teacher;
