const { Tracking } = require("../models");

exports.trackShipment = async (req, res) => {

  try {

    const tracking = await Tracking.findAll({
      where: {
        shipmentId: req.params.id,
      },
    });

    res.json({
      success: true,
      data: tracking,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};