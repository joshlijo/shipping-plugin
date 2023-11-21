const mongoose = require('mongoose');

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    // Add more fields as needed for your order (e.g., customer information, quantity, etc.)
    // Example:
    customerName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 1 // Assuming default quantity is 1
    },
    // ...additional fields
}, { timestamps: true });

// Create the Order model using the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;