const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const championDataSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  tags: { type: Array, required: true },
  stats: { type: Object, required: true },
  date: { type: Date, default: Date.now }
});

const championData = mongoose.model("championData", championDataSchema);

module.exports = championData;