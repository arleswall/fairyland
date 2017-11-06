const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = newSchema({
  totalCost: Number,
  timePlaced: {
    type: Date,
    default: Date.now
  },
  items:[{
    quantity: Number,
    item:{
      type: Schema.Types.ObjectId,
      ref: "Cupcake"
    }
  }]
})

// If you don't calculate the totalCost on the client side, you want to add a
// Hook to run to calculate the totalCost of the order before creating it
// orderSchema.pre("save")