const mongoose  = require("mongoose");
const Item      = require("./models/item");
const itemJson  = require("./public/items.json");

function seedDB() {
  // Remove all campgrounds
  Item.remove({}, function(err) {
    if (err) {
      console.warn(err);
    }
    console.log("Items cleared!");
    
    // Add items from JSON
    const itemData = itemJson['items']
    itemData.forEach(function(seed) {
      Item.create(seed);
    });
  });
}

module.exports = seedDB;