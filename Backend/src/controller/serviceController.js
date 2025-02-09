const Service = require('../models/service');
const io = require('../sockets/serviceSocket');

//  Create a new service (Admin only)
exports.createService = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const { name, description, price, category, image } = req.body;
        const newService = new Service({ name, description, price, category, image });

        await newService.save();

        // Notify all users about new service
        io.emit('serviceAdded', newService);

        res.status(201).json({ message: 'Service created successfully', service: newService });
    } catch (error) {
        res.status(500).json({ message: 'Error creating service', error: error.message });
    }
};

//  Get all services (Public)
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services', error: error.message });
    }
};

//  Get service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: 'Service not found' });

        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching service', error: error.message });
    }
};

//  Update service (Admin only)
exports.updateService = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedService) return res.status(404).json({ message: 'Service not found' });

        // Notify clients about the update
        io.emit('serviceUpdated', updatedService);

        res.json({ message: 'Service updated successfully', service: updatedService });
    } catch (error) {
        res.status(500).json({ message: 'Error updating service', error: error.message });
    }
};

//  Delete service (Admin only)
exports.deleteService = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) return res.status(404).json({ message: 'Service not found' });

        // Notify clients about the deletion
        io.emit('serviceDeleted', deletedService._id);

        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting service', error: error.message });
    }
};
