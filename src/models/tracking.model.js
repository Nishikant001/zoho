const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Tracking = sequelize.define("Tracking", {
  status: {
    type: DataTypes.STRING,
  },

  location: {
    type: DataTypes.STRING,
  },

  remarks: {
    type: DataTypes.TEXT,
  },
});

module.exports = Tracking;