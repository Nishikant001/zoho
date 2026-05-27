const Shipment = require('../models/shipment.model');


const createShipment = async (req, res) => {
  try {
    console.log(req.body);

    const shipment = await Shipment.create({
      shipment_id: req.body.shipment_id,
      courier: req.body.courier,
      tracking_number: req.body.tracking_number,
      status: req.body.status,
      location: "Bhubaneswar Hub",
      eta: "2 Days",
      zoho_record_id: req.body.zoho_record_id,
    });

    res.status(201).json({
      success: true,
      shipment,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getTracking = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      where: {
        tracking_number: req.params.tracking_number
      }
    });

    res.json(shipment);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createShipment,
  getTracking
};