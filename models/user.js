const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin: Boolean,
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("User", userSchema);

module.exports = user;