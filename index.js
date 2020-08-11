const express = require("express");
const cors = require("./node_modules/cors");
const constants = require("./constants");
const app = express();
const sampleData = require("./sampledata");
app.get("/", (req, res) => {
  res.send("app is up and running");
});

app.get("/sampledata", (req, res) => {
  res.send(sampleData);
});
app.use(cors());
app.listen(constants.port, () => {
  console.log("server up and running");
});
