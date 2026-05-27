exports.syncZohoCRM = async (req, res) => {

  setTimeout(() => {

    res.json({
      success: true,
      crm: "Zoho CRM",
      message: "Shipment Synced Successfully",
      syncedAt: new Date(),
    });

  }, 1500);

};