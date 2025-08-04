const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    customer: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true 
              },
    serviceName: { 
        type: String, required: true 
                 },
    description: { 
        type: String, required: true 
                 },
    status: { 
        type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' 
            },
    adminResponse: { type: String } // Optional: Response from the admin
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
