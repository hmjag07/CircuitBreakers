const Request = require('../models/Request');
const io = require('../sockets/requestSocket');

//  Create a new service request (User)
exports.createRequest = async (req, res) => {
    try {
        if (!req.user || req.user.role !== 'user') {
            return res.status(403).json({ message: 'Only user can request services' });
        }

        const { serviceName, description } = req.body;
        const newRequest = new Request({ customer: req.user.id, serviceName, description });

        await newRequest.save();

        // Notify admins about the new request
        io.emit('requestCreated', newRequest);

        res.status(201).json({ message: 'Service request submitted successfully', request: newRequest });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting request', error: error.message });
    }
};

//  Get all service requests (Admin only)
exports.getAllRequests = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const requests = await Request.find().populate('customer', 'name email');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching requests', error: error.message });
    }
};

//  Approve or Reject a Request (Admin only)
exports.updateRequestStatus = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const request = await Request.findById(req.params.id);
        if (!request) return res.status(404).json({ message: 'Request not found' });

        request.status = req.body.status;
        request.adminResponse = req.body.adminResponse || '';

        await request.save();

        // Notify users about the update
        io.emit('requestUpdated', request);

        res.json({ message: 'Request status updated', request });
    } catch (error) {
        res.status(500).json({ message: 'Error updating request', error: error.message });
    }
};

//  Delete a Request (Admin only)
exports.deleteRequest = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const deletedRequest = await Request.findByIdAndDelete(req.params.id);
        if (!deletedRequest) return res.status(404).json({ message: 'Request not found' });

        // Notify users about the deletion
        io.emit('requestDeleted', deletedRequest._id);

        res.json({ message: 'Request deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting request', error: error.message });
    }
};
