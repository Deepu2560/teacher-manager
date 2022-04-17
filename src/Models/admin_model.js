const mongoose = require("mongoose");

const adminschema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Admin = mongoose.model("admin", adminschema);

module.exports = Admin;
