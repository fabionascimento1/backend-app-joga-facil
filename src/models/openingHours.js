const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const openingHoursSchema = new mongoose.Schema(
  {
    company: {
      type: ObjectId,
      ref: 'Company',
      required: true
    },
    day: {
      type: String,
      required: true
    },
    openingTime: {
      type: String,
      required: true
    },
    closingTime: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('OpeningHours', openingHoursSchema)
