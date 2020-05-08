const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.signup = function(req, res) {
  const user = new User();
  user.accountType = req.body.accountType;
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  user.save(function(err, data) {
    if (data) {
      let token = user.generateJwt();
      sendJSONresponse(res, 200, { token: token });
    } else {
      sendJSONresponse(res, 400, { message: 'An error occurred while registering the user.'});
    }
  });
};

module.exports.login = function(req, res) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      sendJSONresponse(res, 404, err);
      return;
    }
    if (user) {
      sendJSONresponse(res, 200, { token: user.generateJwt(), accountType: user.accountType });
    } else {
      sendJSONrsponse(res, 401, info);
    }
  })(req, res);
};
