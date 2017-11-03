const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let cupcakeSchema = new Schema({
  picture: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    regular: Number,
    mini: Number
  }
})

module.exports = mongoose.model("Cupcake", cupcakeSchema)