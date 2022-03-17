const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const companySchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      maxlength: 32,
      unique: true
    },
    street: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true,
      default: 'Brasil'
    },
    postalcode: {
      type: Number,
      required: true
    },
    active: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Company', companySchema)
