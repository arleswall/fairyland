const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan")
const autoIncrement = require('mongoose-auto-increment');

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());


const connection = mongoose.connect(
  "mongodb://localhost/cupcake", 
  { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true }, 
  (err)=>{
    if(err) throw err;
    console.log("Connected to the database")
  }
)
autoIncrement.initialize(connection);


app.use("/cupcake", require("./routes/cupcakeRoutes"))
app.use("/order", require("./routes/orderRoutes"))

app.listen(port, ()=>{
  console.log(`this server is runnning on port ${port}`)
})