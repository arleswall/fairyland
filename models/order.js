const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const orderSchema = new Schema({
  totalCost: Number,
  timePlaced: {
    type: Date,
    default: Date.now
  },
  customer:{
        name: {
          type: String,
          required: true
        },
        phone: {
          type: String,
          required: true
        },    
        pickUpTime: {
          type: Date,
          required: true
    }
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

orderSchema.plugin(autoIncrement.plugin, 'Order');
// const Order = connection.model('Order', orderSchema);


module.exports = mongoose.model("Order", orderSchema)