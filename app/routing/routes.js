var express = require('express')
var path = require('path');

var routes = express.Router();

routes.get('', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/tables.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));

module.exports = routes;