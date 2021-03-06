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

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "homepage.html"));
});
app.get("/homepage.html", (req, res) => {
    res.sendFile(path.join(__dirname, "homepage.html"));
});
app.get("/waitlist.html", (req, res) => {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});
app.get("/reservation.html", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", (req, res) => {
    return res.json(reserverdTables);
})

app.get("api/waitlist", (req, res) => {
    return res.json(waitlist);
})

// if (reserverdTables.length > 5) {
app.post("/api/tables", function (req, res) {
    var newTable = req.body;
    waitlist.push(newTable);
    res.json(newTable);
})
// }
// else {
//     app.post("api/reserverdTables", function (req, res) {
//         var newTable = req.body;
//         reserverdTables.push(newTable);
//         res.json(newTable);
//     })
// 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
