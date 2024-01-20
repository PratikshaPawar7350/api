
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

// Export the handler function for Netlify Functions
exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "");
  const { body, statusCode } = await app({ ...event, path });
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};
