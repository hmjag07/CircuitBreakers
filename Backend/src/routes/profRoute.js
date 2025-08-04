const express = require('express')
const { data } = require('../controller/profController') //professional
const router= express.Router();

router.get('/professionals' ,data );

module.exports = router;