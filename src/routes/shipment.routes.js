const express = require('express');

const router = express.Router();

const {
  createShipment,
  getTracking
} = require('../controllers/shipment.controller');

router.post('/create', createShipment);

router.get('/track/:tracking_number', getTracking);

module.exports = router;