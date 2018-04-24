import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';

var express = require('express')
var path;

var routes = express.Router();

routes.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
routes.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
routes.get('/reservations', (req, res) => res.sendFile(path.join(__dirname, '../public/reservation.html')));

module.exports = routes;