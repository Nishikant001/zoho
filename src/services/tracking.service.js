const statuses = [
  {
    status: 'Shipment Created',
    location: 'Bhubaneswar Hub'
  },
  {
    status: 'Pickup Scheduled',
    location: 'Kolkata Hub'
  },
  {
    status: 'In Transit',
    location: 'Mumbai Hub'
  },
  {
    status: 'Out For Delivery',
    location: 'Delhi Hub'
  },
  {
    status: 'Delivered',
    location: 'Customer Address'
  }
];

const getNextStatus = currentStatus => {
  const index = statuses.findIndex(
    item => item.status === currentStatus
  );

  if (index === -1) {
    return statuses[0];
  }

  if (index === statuses.length - 1) {
    return statuses[index];
  }

  return statuses[index + 1];
};

module.exports = {
  getNextStatus
};