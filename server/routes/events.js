var express = require('express');
var router = express.Router();
const eventController = require('./../controllers/eventController');
const isAuth = require('./../controllers/authController').isLogged

// creating new event at this route
router.post('/create', isAuth, eventController.create)

// getting list of events
router.get('/list', eventController.getEvents);

module.exports = router;