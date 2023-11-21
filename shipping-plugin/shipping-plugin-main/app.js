require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7777;
const products = require("./products.json"); // Load product data from JSON
const oas = require("./openai.json");
const manifest = require('./.well-known/ai-plugin.json');
const shipmentRoutes = require('./routes/shipment');

app.use('/api/shipments', shipmentRoutes);

app.get("/", (req, res) => {
    res.send("This is live");
});

app.get("/openai.json", (req, res) => {
    res.json(oas);
});

app.get("/.well-known/ai-plugin.json", (req, res) => {
    res.json(manifest);
});

// Endpoint to serve product data from JSON file
app.get("/api/products", (req, res) => {
    res.json(products);
});

const start = async () => {
    try {
        // No need for the database connection in this case
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();