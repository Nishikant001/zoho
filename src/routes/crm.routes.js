const express = require("express");
const router = express.Router();

const crmController = require("../controllers/crm.controller");

router.post("/sync", crmController.syncZohoCRM);

module.exports = router;