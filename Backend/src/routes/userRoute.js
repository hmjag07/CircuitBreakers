const express = require('express')

//controller functions
const{ signupUser, loginUser } = require('../controller/userController') //resident
const{ signupProf, loginProf } = require('../controller/profController') //professional

const router = express.Router()

// login route
router.post('/prof/login', loginProf)
router.post('/resi/login', loginUser)


// signup route
router.post('/resi/signup', signupUser)
router.post('/prof/signup', signupProf)


module.exports = router;
