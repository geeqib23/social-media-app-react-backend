const Follow = require("../models/Follow");

exports.apiAddFollow = function (req, res) {
  let follow = new Follow(req.params.username, req.apiUser._id);
  follow
    .create()
    .then(() => {
      res.json(true);
    })
    .catch((errors) => {
      res.status(400).json(errors);
    });
};

exports.apiRemoveFollow = function (req, res) {
  let follow = new Follow(req.params.username, req.apiUser._id);
  follow
    .delete()
    .then(() => {
      res.json(true);
    })
    .catch((errors) => {
      res.json(false);
    });
};
