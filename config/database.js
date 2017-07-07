require('dotenv').config()
var passport	= require('passport');

module.exports = {
  'secret': 'secrectkey',
  'database': 'mongodb://localhost:27017/testproject' //process.env.DB_URL
};

module.exports.isAuthenticated = passport.authenticate('jwt', { session : false });