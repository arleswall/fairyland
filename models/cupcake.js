const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let cupcakeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Cupcake", cupcakeSchema)