const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Basic route
app.get("/", (req, res) => {
  res.send("Trail-Tuned API is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const trailRoutes = require("./routes/trails");
app.use("/api/trails", trailRoutes);
