const express = require('express');
const { createBooking, getAllBookings, updateBookingStatus } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createBooking);
router.get('/admin/all', authMiddleware, getAllBookings);
router.patch('/admin/update/:id', authMiddleware, updateBookingStatus);

module.exports = router;
