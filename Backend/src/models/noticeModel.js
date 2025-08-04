const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    message: { 
      type: String, 
      required: true 
    },
    user: { 
      type: mongoose.Schema.Types.ObjectId, ref: 'User',
       required: true 
      }, // User receiving the notice
    type: { 
      type: String, enum: ['booking', 'request', 'general'], 
      default: 'general' }, // Notice type
    createdAt: { 
      type: Date, default: Date.now, 
      expires: '7d' } // Auto-delete after 7 days
});

module.exports = mongoose.model('Notice', noticeSchema);
