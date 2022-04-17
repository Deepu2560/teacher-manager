const express = require("express");

// getting connect function form config/db
const connect = require("./src/Config/db");

const app = express();

/* app.listen to start server on 8080 port */
app.listen(8080, async () => {
  try {
    await connect();
    console.log("connected to server");
  } catch (error) {
    console.log("ERROR:", error);
  }
});
