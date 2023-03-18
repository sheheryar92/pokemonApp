const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const todoModel = require("./todoSchema");
const { json } = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000;

app.listen(port, console.log(`app is running on port : ${port}`));

mongoose
  .connect(
    ""
  )
  .then(console.log("connected to data base"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("hello world from server");

  console.log(res.send("hello world"));
});



//// SENDING DATA TO DATA BASE / SAVING DATA TO DATA BASE
app.post("/", (req, res) => {
  res.send("data submited to the server");

  const saveData = new todoModel({
    todo: req.body.todo,
  });
 saveData.save();
 console.log(req.body, "this is body data");
});

//// READING DATA FROM DATA BASE
app.get("/data", async (req, res) => {
  const loadData = await todoModel.find({});
console.log(loadData);
 res.send(loadData);
});





