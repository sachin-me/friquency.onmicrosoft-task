const jwt = require('jsonwebtoken');
const User = require('./../models/User');

module.exports = {
  isLogged: (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token, 'token in auth ctrl')

    if (!token) {
      return res.status(401).json({
        err: 'Unauthorized user'
      })
    } else {
      jwt.verify(token, process.env.secret, (err, decode) => {
        if (err) {
          return res.status(500).json({
            err: 'Bad request'
          })
        } else {
          res.locals.userId = decode;
          next()
        }
      })
    }
  }
}