
const express = require("express");
const router = express.Router();
const Item = require("../models/item")

// =========================
// ITEM ROUTES
// =========================

// Landing Page
router.get("/", (req, res) => {
    res.render("index.ejs")
})

// INDEX - Show all campgrounds
router.get("/items", function(req, res) {
  // Get all campgrounds from database
  Item.find({}, function (err, items){
    if (err) {
      console.log(err);
    } else {
      res.render("items.ejs", {items: items});
    }
  })
});

module.exports = router;