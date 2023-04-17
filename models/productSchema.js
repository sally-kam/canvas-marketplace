const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true},
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = productSchema;