// Root route
app.get("/", (req, res) => {
    res.send("Boss AI Backend is running 🚀");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
