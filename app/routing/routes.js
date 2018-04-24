var express = require('express');
var path = require('path');
var tablelist = require('../data/tablelist.js');
var bodyParser = require("body-parser");

var routes = express.Router();

routes.get('', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));

routes.post('/reservations', function (req, res) {
    let newReservation = req.body;


    res.json(newReservation);
})

routes.get("/api/tables", (req, res) => {
    res.json(tablelist);
    console.log(tablelist);
})

module.exports = routes;