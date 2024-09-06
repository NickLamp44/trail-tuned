const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Password strength validation (at least 8 characters, includes letters, numbers, and symbols)
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "Password must be at least 8 characters, include letters, numbers, and symbols.",
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Basic email format validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email format.",
    },
  },
  birthday: { type: Date },
  height: { type: Number }, // Stored in cm
  weight: { type: Number }, // Stored in kg
  currentBikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bike" }],
});

// Hash password before saving
userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

// Method to validate password
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model("User", userSchema);

module.exports.User = User;
