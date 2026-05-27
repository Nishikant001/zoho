const axios = require('axios');

const updateZohoShipment = async shipment => {
  try {
    const url = `https://www.zohoapis.in/crm/v2/${process.env.ZOHO_MODULE}/${shipment.zoho_record_id}`;

    const body = {
      data: [
        {
          Tracking_Status: shipment.status,
          Last_Location: shipment.location
        }
      ]
    };

    await axios.put(url, body, {
      headers: {
        Authorization: `Zoho-oauthtoken ${process.env.ZOHO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Zoho CRM Updated');
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

module.exports = {
  updateZohoShipment
};