const express = require('express')
const router = express.Router()

const {
  create,
  listByUser,
  listActiveByUser,
  update
} = require('../controllers/company')
const { requireSignin } = require('../controllers/auth')

router.post('/company', requireSignin, create)
router.get('/company/:userId', requireSignin, listByUser)
router.get('/company-active/:userId', requireSignin, listActiveByUser)
router.put('/company/:id/:status', requireSignin, update)

module.exports = router
