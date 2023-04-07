const express = require('express')
const router = express.Router()

const {
  create,
  listByCompany,
  update
} = require('../controllers/openingHours')
const { requireSignin } = require('../controllers/auth')

router.post('/openingHours', requireSignin, create)
router.get('/openingHours/:companyId', requireSignin, listByCompany)
router.put('/openingHours/:id', requireSignin, update)

module.exports = router
