const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const sportscenterSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    company: {
      type: ObjectId,
      ref: 'Company',
      required: true
    },
    name: {
      type: String,
      required: true,
      maxlength: 32
    },
    type: {
      type: String,
      required: true
    },
    active: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Sportscenter', sportscenterSchema)
