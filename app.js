const express       = require('express');
const mongoose      = require('mongoose');
// const bodyParser    = require("body-parser");

const Item          = require("./models/item");
const itemRoutes    = require("./routes/items");
const seedDB        = require("./seeds.js");
const app           = express();

// Initialize
const uri = `mongodb+srv://${process.env.TABLUM_UID}:${process.env.TABLUM_PWD}@tablum.zvip3.mongodb.net/riskofrain?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected...")
    })
    .catch(err => console.log(err));
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

// Seed the database
// seedDB();

// // Routes

// // Landing Page
// app.get("/", (req, res) => {
//     res.render("index.ejs")
// })

// // INDEX - Show all campgrounds
// app.get("/items", function(req, res) {
//   // Get all campgrounds from database
//   Item.find({}, function (err, items){
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("items.ejs", {items: items});
//     }
//   })
// });
app.use("/", itemRoutes);

// Start App
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The server has started!");
})
