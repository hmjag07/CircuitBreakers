const express = require('express');
const { createNotice, getUserNotices, deleteNotice } = require('../controllers/noticeController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createNotice); // Admin creates notices
router.get('/', authMiddleware, getUserNotices); // User gets their notices
router.delete('/:id', authMiddleware, adminMiddleware, deleteNotice); // Admin deletes notices

module.exports = router;
