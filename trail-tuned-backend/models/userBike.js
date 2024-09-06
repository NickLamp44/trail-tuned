const mongoose = require("mongoose");

const userBikeSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[0-9]{4}$/.test(value); // Ensures the year is 4 digits
      },
      message: "Year must be a 4-digit number.",
    },
  },
  model: {
    type: String,
    required: true,
  },
  wheelSize: {
    type: Number,
    required: true,
    enum: [26, 27.5, 29], // Common wheel sizes
    message: "Wheel size must be 26, 27.5, or 29.",
  },
  frontTravel: {
    type: Number,
    required: true,
    min: [0, "Front travel must be a positive number."], // Positive travel required
  },
  rearTravel: {
    type: Number,
    required: true,
    min: [0, "Rear travel must be a positive number."], // Positive travel required
  },
  forkModel: {
    type: String,
    default: "Unknown",
  },
  shockModel: {
    type: String,
    default: "Unknown",
  },
});

let Bike = mongoose.model("Bike", userBikeSchema);

module.exports.Bike = Bike;
