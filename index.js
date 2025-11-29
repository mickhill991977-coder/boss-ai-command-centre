require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// ----------------------------
// ROOT ROUTE (basic homepage)
// ----------------------------
app.get("/", (req, res) => {
    res.send("Boss AI Backend is running 🚀");
});

// ----------------------------
// HEALTH CHECK
// ----------------------------
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// ----------------------------
// START SERVER
// ----------------------------
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});
