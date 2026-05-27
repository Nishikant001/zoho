const Shipment = require("./shipment.model");
const Tracking = require("./tracking.model");
const CRMSync = require("./crmSync.model");

Shipment.hasMany(Tracking, {
  foreignKey: "shipmentId",
});

Tracking.belongsTo(Shipment, {
  foreignKey: "shipmentId",
});

Shipment.hasMany(CRMSync, {
  foreignKey: "shipmentId",
});

CRMSync.belongsTo(Shipment, {
  foreignKey: "shipmentId",
});

module.exports = {
  Shipment,
  Tracking,
  CRMSync,
};