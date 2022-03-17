const Sportscenter = require('../models/sportscenter')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
  // console.log("req.body", req.body);
  const sportscenter = new Sportscenter(req.body)
  sportscenter.save((err, sportscenter) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      sportscenter
    })
  })
}

exports.listByUser = (req, res) => {
  Sportscenter.find()
    .where({
      user: req.params.userId
    })
    .exec(function (err, sportscenteries) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      } else {
        res.status(200).json(sportscenteries)
      }
    })
}

exports.listActiveByUser = (req, res) => {
  Sportscenter.find()
    .where({
      user: req.params.userId,
      active: 1
    })
    .exec(function (err, sportscenteries) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      } else {
        res.status(200).json(sportscenteries)
      }
    })
}

exports.update = (req, res) => {
  Sportscenter.findById(req.params.id, function (err, sportscenter) {
    if (err) res.send(err)
    sportscenter.active = req.params.status
    sportscenter.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json(data)
    })
  })
}
