const express = require('express');
const { createService, getAllServices, getServiceById, updateService, deleteService } = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createService);
router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.patch('/update/:id', authMiddleware, updateService);
router.delete('/delete/:id', authMiddleware, deleteService);

module.exports = router;
