const Booking = require('../models/Booking');
const sendEmail = require('../utils/emailService');
const io = require('../sockets/bookingSocket');

//  Create a new booking with real-time update
exports.createBooking = async (req, res) => {
    try {
        const { serviceId, date } = req.body;

        if (!req.user || req.user.role !== 'user') {
            return res.status(403).json({ message: 'Only users can book services' });
        }

        const booking = new Booking({ customer: req.user.id, service: serviceId, date });
        await booking.save();

        // Notify Admin & Service Providers
        io.emit('bookingCreated', booking);

        sendEmail(req.user.email, 'Booking Confirmation', `Your booking for service ID ${serviceId} is confirmed!`);

        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        res.status(500).json({ message: 'Booking failed', error: error.message });
    }
};

//  Admin: Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const bookings = await Booking.find().populate('customer', 'name email').populate('service', 'name price');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
};

//  Admin: Update Booking Status (Confirm, Cancel, Complete)
exports.updateBookingStatus = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        booking.status = req.body.status;
        await booking.save();

        // Notify Users
        io.emit('bookingUpdated', booking);

        res.json({ message: 'Booking status updated', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error updating booking', error: error.message });
    }
};
