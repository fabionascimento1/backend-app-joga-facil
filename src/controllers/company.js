const Company = require('../models/company')
const { errorHandler } = require('../helpers/dbErrorHandler')

exports.create = (req, res) => {
  // console.log("req.body", req.body);
  const company = new Company(req.body)
  company.save((err, company) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      company
    })
  })
}

exports.listByUser = (req, res) => {
  Company.find()
    .where({
      user: req.params.userId
    })
    .exec(function (err, Companies) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      } else {
        res.status(200).json(Companies)
      }
    })
}

exports.listActiveByUser = (req, res) => {
  Company.find()
    .where({
      user: req.params.userId,
      active: 1
    })
    .exec(function (err, Companies) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      } else {
        res.status(200).json(Companies)
      }
    })
}

exports.update = (req, res) => {
  Company.findById(req.params.id, function (err, company) {
    if (err) res.send(err)
    company.active = req.params.status
    company.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json(data)
    })
  })
}
