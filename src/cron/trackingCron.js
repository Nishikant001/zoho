const cron = require('node-cron');

const Shipment = require('../models/shipment.model');

const {
  getNextStatus
} = require('../services/tracking.service');

const {
  updateZohoShipment
} = require('../services/zoho.service');

const startTrackingCron = () => {
  cron.schedule('*/1 * * * *', async () => {
    console.log('Tracking Cron Running');

    const shipments = await Shipment.findAll();

   for (const shipment of shipments) {

  if (shipment.status === "Delivered") {
    continue;
  }

  const next = getNextStatus(shipment.status);

  shipment.status = next.status;
  shipment.location = next.location;

  await shipment.save();

  await updateZohoShipment(shipment);

  console.log(
    `${shipment.tracking_number} updated to ${shipment.status}`
  );
}
  });
};

module.exports = startTrackingCron;