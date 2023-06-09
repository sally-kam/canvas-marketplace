const Order = require('../../models/order');
const Product = require('../../models/product');

module.exports = {
  cart,
  addToCart,
  setProductQtyInCart,
  checkout,
  forUser,
  deleteOrder
};

async function forUser(req, res) {
  // get orders for the logged in user
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an product to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addProductToCart(req.params.id);
  res.json(cart);
}

// Updates an product's qty in the cart
async function setProductQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setProductQty(req.body.productId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function deleteOrder(req, res) {
  const orderId = req.params.id;
  const deletedOrder= await Order.findByIdAndDelete(orderId);
  res.json({deletedOrder});
}

