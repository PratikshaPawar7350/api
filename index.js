
const express = require("express");
const cors = require("cors");
const port=process.env.PORT ||3000;
const app = express();
app.use(cors());

const apidata = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "Hello, I am live" });
});
app.listen(port,()=>{
    console.log(" Again hello i am live");

})
app.get("/service", (req, res) => {
  res.json(apidata);
});

// Use 'exports' instead of 'module.exports' when not using the 'functions' folder
exports.handler = app;
