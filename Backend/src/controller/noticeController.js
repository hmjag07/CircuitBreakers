
const Notice = require('../models/noticeModel');
const { sendRealTimeNotification } = require('../sockets/noticeSocket');


 //Create a new notice (Admin only)
 
exports.createNotice = async (req, res) => {
    try {
        const { title, message, user, type } = req.body;

        const notice = new Notice({ title, message, user, type });
        await notice.save();

        // Send real-time notification
        sendRealTimeNotification(user, { title, message });

        res.status(201).json({ message: 'Notice created successfully', notice });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


 //Get notices for a specific user
 
exports.getUserNotices = async (req, res) => {
    try {
        const notices = await Notice.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(notices);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


 //Admin: Delete a notice
 
exports.deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findById(req.params.id);
        if (!notice) {
            return res.status(404).json({ message: 'Notice not found' });
        }

        await notice.deleteOne();
        res.json({ message: 'Notice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
