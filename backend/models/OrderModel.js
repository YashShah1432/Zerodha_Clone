const { model } = require("mongoose");

const { orderSchema } = require("../Schemas/OrderSchema");

const Order = model("Order", orderSchema);

module.exports = {Order};