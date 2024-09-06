const express = require("express");
// const Trail = require("../models/Trail");
const router = express.Router();

// Create a new trail
router.post("/", async (req, res) => {
  try {
    const newTrail = new Trail(req.body);
    await newTrail.save();
    res.status(201).json(newTrail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all trails
router.get("/", async (req, res) => {
  try {
    const trails = await Trail.find();
    res.json(trails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific trail by ID
router.get("/:id", async (req, res) => {
  try {
    const trail = await Trail.findById(req.params.id);
    if (!trail) return res.status(404).json({ message: "Trail not found" });
    res.json(trail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a trail by ID
router.put("/:id", async (req, res) => {
  try {
    const trail = await Trail.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!trail) return res.status(404).json({ message: "Trail not found" });
    res.json(trail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a trail by ID
router.delete("/:id", async (req, res) => {
  try {
    const trail = await Trail.findByIdAndDelete(req.params.id);
    if (!trail) return res.status(404).json({ message: "Trail not found" });
    res.json({ message: "Trail deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
