const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.itemData
      .find(req.query)
      .sort({ username: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    db.itemData
      .find({name: req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySearch: function(req, res) {
    db.itemData
      .find( { $or: [{name: req.body.name}, {colloq: req.body.colloq}]})
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};