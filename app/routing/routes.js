var express = require('express')
var path = require('path');

var routes = express.Router();

routes.get('', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));

routes.post('/reservations', function(req, res) {
    let newReservation = req.body;
    
    res.json(newReservation);
} )

module.exports = routes;