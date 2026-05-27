const express = require("express");
const router = express.Router();

const trackingController = require("../controllers/tracking.controller");

router.get("/:id", trackingController.trackShipment);

module.exports = router;