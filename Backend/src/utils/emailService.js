const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Configure the transporter (SMTP)
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

/**
 * Sends an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - Email content in HTML format
 */
const sendEmail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(` Email sent: ${info.response}`);
    } catch (error) {
        console.error(' Error sending email:', error.message);
    }
};

/**
 * Sends a booking confirmation email
 * @param {string} userEmail - Customer's email
 * @param {string} serviceName - Booked service name
 * @param {string} date - Booking date
 */
const sendBookingConfirmation = async (userEmail, serviceName, date) => {
    const emailContent = `
        <h2>Booking Confirmation</h2>
        <p>Dear Customer,</p>
        <p>Your booking for <strong>${serviceName}</strong> on <strong>${date}</strong> has been confirmed.</p>
        <p>Thank you for choosing our services!</p>
    `;

    await sendEmail(userEmail, 'Your Booking Confirmation', emailContent);
};

/**
 * Sends an admin notification for new bookings
 * @param {string} adminEmail - Admin email
 * @param {string} customerName - Customer name
 * @param {string} serviceName - Booked service name
 */
const sendAdminBookingAlert = async (adminEmail, customerName, serviceName) => {
    const emailContent = `
        <h2>New Booking Alert</h2>
        <p>Admin,</p>
        <p>A new booking has been placed by <strong>${customerName}</strong> for <strong>${serviceName}</strong>.</p>
    `;

    await sendEmail(adminEmail, 'New Booking Alert', emailContent);
};

module.exports = { sendBookingConfirmation, sendAdminBookingAlert };
