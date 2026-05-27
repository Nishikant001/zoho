const express = require("express");
const cors = require("cors");

const shipmentRoutes = require("./routes/shipment.routes");
const trackingRoutes = require("./routes/tracking.routes");
const crmRoutes = require("./routes/crm.routes");

const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/shipments", shipmentRoutes);

app.use("/api/tracking", trackingRoutes);

app.use("/api/crm", crmRoutes);

app.use(errorMiddleware);

module.exports = app;