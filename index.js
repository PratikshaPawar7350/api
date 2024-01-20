const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const apidata = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "Hello, I am live" });
});

app.get("/service", (req, res) => {
  res.json(apidata);
});

// Export the app for Netlify Functions
module.exports = app;
