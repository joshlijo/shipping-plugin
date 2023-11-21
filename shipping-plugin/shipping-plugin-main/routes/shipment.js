const express = require('express');
const router = express.Router();
const shipments = require('../controllers/shipment');

/**
 * @swagger
 * /api/shipments/placeOrder:
 *  post:
 *      summary: Place a shipment order
 *      description: Place a shipment order for an existing order with shipping details
 *      responses:
 *          200:
 *              description: Shipment order placed successfully
 */
router.route('/placeOrder').post(shipments.placeShipmentOrder);

/**
 * @swagger
 * /api/shipments/status/{shipmentId}:
 *  get:
 *      summary: Get shipment status
 *      description: Get the current status of a shipment by its ID
 *      responses:
 *          200:
 *              description: Return shipment status
 */
router.route('/status/:shipmentId').get(shipments.getShipmentStatus);

module.exports = router;