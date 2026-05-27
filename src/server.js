require("dotenv").config();

const app = require("./app");

const { sequelize } = require("./config/db");

const startTrackingCron = require("./cron/trackingCron");

const PORT = process.env.PORT || 5001;

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Connected");

    startTrackingCron();

    app.listen(PORT, () => {
      console.log(`Server Running On ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });