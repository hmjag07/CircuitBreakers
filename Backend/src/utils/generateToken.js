const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Generates a JWT token for user authentication
 * @param {string} userId - The user's ID
 * @returns {string} - Signed JWT token
 */
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '7d' // Token expires in 7 days
    });
};

module.exports = generateToken;
