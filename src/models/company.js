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
    number: {
      type: String,
      required: true
    },
    complement: {
      type: String,
      required: false
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
      type: String,
      required: true
    },
    floor: {
      type: Array,
      required: false
    },
    active: {
      type: Number,
      default: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Company', companySchema)
