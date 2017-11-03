const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = newSchema({
  totalCost: Number,
  timePlaced: Date,
  items:[{
    quantity: Number,
    item:{
      type: Schema.Types.ObjectId,
      ref: "Cupcake"
    }
  }]
})