const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");

const Shipment = sequelize.define(
  "Shipment",
  {
    shipment_id: {
      type: DataTypes.STRING,
    },

    courier: {
      type: DataTypes.STRING,
    },

    tracking_number: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.STRING,
    },

    location: {
      type: DataTypes.STRING,
    },

    eta: {
      type: DataTypes.STRING,
    },

    zoho_record_id: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Shipment;