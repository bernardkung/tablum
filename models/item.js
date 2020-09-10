const mongoose = require("mongoose");

// Schema
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  stack: String,
  drop: String,
  rarity: String,
  file_name: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;