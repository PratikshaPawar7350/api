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

// Create a handler function for Netlify Functions
const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify Function" }),
  };
};

// Export the handler function
module.exports = { handler };
