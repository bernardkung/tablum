const express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.send("Landing page!")
})

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The Yelpcamp Server has started!");
})