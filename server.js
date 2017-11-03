const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/cupcake", (err)=>{
  if(err) throw err;
  console.log("Connected to the database")
})

app.use("/cupcake", require("./routes/cupcakeRoutes"))

app.listen(port, ()=>{
  console.log(`this server is runnning on port ${port}`)
})