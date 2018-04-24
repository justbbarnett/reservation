var express = require('express');
var path = require('path');
var tablelist = require('../data/tablelist.js');
var bodyParser = require("body-parser");
var waitlist = require('../data/waitlist.js')

var routes = express.Router();

routes.get('', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));


if (tablelist.length <= 5) {
    routes.post('/api/tables', function (req, res) {
        let newReservation = req.body;
        tablelist.push(newReservation);
        res.json(newReservation);   
    })
} else {
        routes.post('/api/waitlist', function (req, res) {
        let newReservation = req.body;
        waitlist.push(newReservation);
        res.json(newReservation);
})
}
console.log(tablelist.length)

routes.get("/api/tables", (req, res) => {
    res.json(tablelist);
    console.log(tablelist);
})

routes.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
    console.log(waitlist);
})

module.exports = routes;