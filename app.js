const express = require("express");
const bodyParser = require("body-parser");

const mediaRoutes = require("./routes/mediaRoutes");
const userRoutes = require("./routes/userRoutes");
const likesRoutes = require("./routes/likesRoutes");

const app = express(); // Initialize express

app.use(bodyParser.json()); // Add middleware to parse JSON

// Define routes
app.use("/api/media", mediaRoutes);
app.use("/api/users", userRoutes);
app.use("/api/likes", likesRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
