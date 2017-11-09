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


mongoose.connect(
  "mongodb://localhost/cupcake", 
  { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true }, 
  (err)=>{
    if(err) throw err;
    console.log("Connected to the database")
  }
)

app.use("/cupcake", require("./routes/cupcakeRoutes"))
app.use("/order", require("./routes/orderRoutes"))

app.listen(port, ()=>{
  console.log(`this server is runnning on port ${port}`)
})