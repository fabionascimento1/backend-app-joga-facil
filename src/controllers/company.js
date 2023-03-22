const Company = require("../models/company");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  // console.log("req.body", req.body);
  const company = new Company(req.body);
  company.save((err, company) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      company,
    });
  });
};

exports.listByUser = (req, res) => {
  const { offset, limit } = req.query;
  const page = offset ?? 1;
  const pagination = limit ?? 10;
  Company.find()
    .where({
      user: req.params.userId,
    })
    .limit(parseInt(pagination))
    .skip(parseInt(page - 1) * pagination ?? 2)
    .exec(function (err, Companies) {
      Company.count().exec(function (err, count) {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.status(200).json({
            content: Companies,
            current: parseInt(page),
            pages: Math.ceil(parseInt(count / pagination) + 1),
            total: count,
          });
        }
      });
    });
};

exports.listActiveByUser = (req, res) => {
  Company.find()
    .where({
      user: req.params.userId,
      active: 1,
    })
    .exec(function (err, Companies) {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else {
        res.status(200).json(Companies);
      }
    });
};

exports.update = (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runVaidator: true,
  }).exec(function (err, Companies) {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      res.status(200).json(Companies);
    }
  });
};
