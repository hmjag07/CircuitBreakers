const express = require('express')

//controller functions
const{ signupUser, loginUser } = require('../controller/userController') //resident
const{ signupProf, loginProf } = require('../controller/profController') //professional
const{ createNotice, notices } = require('../controller/noticeController')
const router = express.Router()

// login route
router.post('/prof/login', loginProf)
router.post('/resi/login', loginUser)

// notice
router.post('/resi/notices', notices)
router.post('/resi/notices/create', createNotice)


// signup route
router.post('/resi/signup', signupUser)
router.post('/prof/signup', signupProf)


module.exports = router;
