const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({
  name: {
    type: String,
    required: 'Name is required!'
  },
  details: {
    type: String,
    required: 'Details is required!'
  },
  amount: {
    type: Number,
    required: 'Amount is required!'
  }
})

module.exports = mongoose.model('products', productSchema);