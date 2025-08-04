const cron = require('node-cron');
const Notice = require('../models/noticeModel');


 //Schedule job to remove expired notices every 24 hours
 
const scheduleNoticeCleanup = () => {
    cron.schedule('0 0 * * *', async () => {
        try {
            const result = await Notice.deleteMany({ createdAt: { $lte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } });
            console.log(`Deleted ${result.deletedCount} expired notices`);
        } catch (error) {
            console.error('Error deleting expired notices:', error.message);
        }
    });
};

module.exports = scheduleNoticeCleanup;
