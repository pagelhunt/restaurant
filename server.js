// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reserverdTables = [
    {
        customerID: 687,
        customerName: "Chance Wright",
        customerEmail: "chance@chance.com",
        phoneNumber: 678655434
    },
    {
        customerID: 111,
        customerName: "Page Hunt",
        customerEmail: "page@page.com",
        phoneNumber: 67865674
    },
    {
        customerID: 686,
        customerName: "Tamara Sidorova",
        customerEmail: "tamara@tamara.com",
        phoneNumber: 67866768
    },
    {
        customerID: 345,
        customerName: "Keanu Reeves",
        customerEmail: "keanu@badass.com",
        phoneNumber: 6786868
    },
    {
        customerID: 1344,
        customerName: "Collab",
        customerEmail: "collab@bootcamp.com",
        phoneNumber: 6786868
    },
];

var waitlist = []

app.get("/api/reservedTables", (req, res) => {

    app.get("/api/tables", (req, res) => {
        return res.json(reservedTables);
    })

    app.get("api/waitlist", (req, res) => {
        return res.json(waitlist);
    })

    // Starts the server to begin listening
    // =============================================================
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });