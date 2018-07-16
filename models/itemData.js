const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemDataSchema = new Schema({
  image: { type: String, required: true },
  colloq: { type: String, required: true },
  into: { type: Array, required: true },
  name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const itemData = mongoose.model("itemData", itemDataSchema);

module.exports = itemData;