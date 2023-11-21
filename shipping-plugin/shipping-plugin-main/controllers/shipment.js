const Shipment = require('../models/shipment');

const placeShipmentOrder = async (req, res) => {
    try {
        const { orderId, shippingAddress, trackingNumber } = req.body;

        const newShipment = new Shipment({
            orderId,
            shippingAddress,
            trackingNumber,
        });

        const savedShipment = await newShipment.save();

        res.status(200).json({ savedShipment, message: "Shipment order placed successfully" });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getShipmentStatus = async (req, res) => {
    try {
        const { shipmentId } = req.params;

        const shipment = await Shipment.findById(shipmentId);

        if (!shipment) {
            return res.status(404).json({ message: 'Shipment not found' });
        }

        res.status(200).json({ shipment });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { placeShipmentOrder, getShipmentStatus };
