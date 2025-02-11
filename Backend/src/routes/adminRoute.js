const express = require('express');
const { makeAdmin } = require('../controllers/adminController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.put('/make-admin', authMiddleware, adminMiddleware, makeAdmin);

module.exports = router;
