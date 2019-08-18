var express = require('express');
var router = express.Router();
const eventController = require('./../controllers/eventController');
const isAuth = require('./../controllers/authController').isLogged

/* GET events listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// creating new event at this route
router.post('/create', isAuth, eventController.create)

module.exports = router;