const OpeningHours = require('../models/openingHours')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
  /* console.log("req.body", req.body); */
  const openingHours = new OpeningHours(req.body)
  openingHours.save((err, openingHours) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      openingHours
    })
  })
}

exports.listByCompany = (req, res) => {
  OpeningHours.find()
    .where({
      company: req.params.companyId
    })
    .exec(function (err, openingHours) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      } else {
        res.status(200).json(openingHours)
      }
    })
}

exports.update = (req, res) => {
  OpeningHours.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runVaidator: true
  }).exec(function (err, openingHours) {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    } else {
      res.status(200).json(openingHours)
    }
  })
}
