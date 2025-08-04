const User = require('../models/userModel');


//Grant admin access to a user (Only existing admins can do this which will be some employee handling the backend, at this moment just uss)
 
exports.makeAdmin = async (req, res) => {
    try {
        const { email } = req.body; // Get email of the user to be made admin

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.role === 'admin') {
            return res.status(400).json({ message: 'User is already an admin' });
        }

        user.role = 'admin';
        await user.save();

        res.json({ message: `User ${user.email} is now an admin.` });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
