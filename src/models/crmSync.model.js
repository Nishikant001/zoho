const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const CRMSync = sequelize.define("CRMSync", {
  crmName: {
    type: DataTypes.STRING,
    defaultValue: "Zoho CRM",
  },

  syncStatus: {
    type: DataTypes.STRING,
    defaultValue: "Success",
  },

  syncedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = CRMSync;