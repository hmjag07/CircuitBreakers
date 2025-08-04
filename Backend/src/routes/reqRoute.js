const express = require('express');
const { createRequest, getAllRequests, updateRequestStatus, deleteRequest } = require('../controller/reqController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createRequest);
router.get('/admin/all', authMiddleware, getAllRequests);
router.patch('/admin/update/:id', authMiddleware, updateRequestStatus);
router.delete('/admin/delete/:id', authMiddleware, deleteRequest);

module.exports = router;
