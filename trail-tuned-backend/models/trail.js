const mongoose = require("mongoose");

const trailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Moderate", "Hard"],
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trail = mongoose.model("Trail", trailSchema);

module.exports = Trail;
