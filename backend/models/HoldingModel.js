const { model } = require("mongoose");

const { holdingSchema } = require("../Schemas/HoldingSchema");

const Holding = model("Holding", holdingSchema);

module.exports = {Holding};