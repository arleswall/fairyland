const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  totalCost: Number,
  timePlaced: {
    type: Date,
    default: Date.now
  },
  items:[{
    quantity: {
      regular: Number,
      mini: Number
    },
    cupcake:{
      type: Schema.Types.ObjectId,
      ref: "Cupcake"
    }
  }]
})
module.exports = mongoose.model("Order", orderSchema)
// If you don't calculate the totalCost on the client side, you want to add a
// hook to run to calculate the totalCost of the order before creating it
// orderSchema.pre("save")