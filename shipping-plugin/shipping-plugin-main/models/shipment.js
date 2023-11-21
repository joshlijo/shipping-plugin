// shipment.js in models folder
const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Order ID
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    trackingNumber: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered'],
        default: 'Pending',
    },
    // Other shipment details as needed
}, { timestamps: true });

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;