const { model } = require("mongoose");

const { positionSchema } = require("../Schemas/PositionSchema");

const Position = model("Position", positionSchema);

module.exports = {Position};