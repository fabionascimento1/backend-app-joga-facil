const express = require('express')
const router = express.Router()

const {
  create,
  listByUser,
  listActiveByUser,
  update
} = require('../controllers/sportscenter')
const { requireSignin } = require('../controllers/auth')

router.post('/sportscenter', requireSignin, create)
router.get('/sportscenter/:userId', requireSignin, listByUser)
router.get('/sportscenter-active/:userId', requireSignin, listActiveByUser)
router.put('/sportscenter/:id/:status', requireSignin, update)

module.exports = router
