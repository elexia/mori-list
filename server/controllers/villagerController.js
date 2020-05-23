const mongoose = require('mongoose');
const Villager = mongoose.model('Villager');

const sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.list = function(req, res) {
  Villager.find({})
    .exec(function(err, villagers) {
      if (villagers) {
        sendJSONresponse(res, 200, villagers);
      } else {
        sendJSONresponse(res, 404, {"message": "There was a problem listing villagers."});
      }
    });
};

module.exports.get = function(req, res) {
  let name = req.params.name;
  Villager.findOne({ name: new RegExp(`^${name}$`, 'i') })
    .exec(function(err, villager) {
      if (villager) {
        sendJSONresponse(res, 200, villager);
      } else {
        sendJSONresponse(res, 404, {"message": "Could not find specified villager."})
      }
    })
}
