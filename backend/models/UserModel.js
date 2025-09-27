const { model } = require("mongoose");

const { userSchema } = require("../Schemas/UserSchema");

const User = model("User", userSchema);

module.exports = User;