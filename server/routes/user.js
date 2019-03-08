const router = require('express').Router()
const UserController = require('../controllers/usercontroller')

router.post('/signup', UserController.signup)

router.post('/signin', UserController.signin)

// router.get('/home')

// router.

module.exports = router