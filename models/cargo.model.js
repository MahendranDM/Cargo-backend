const mongoose = require("mongoose");
const toJSON = require("../utils/toJSON.plugin");

const cargoSchema = new mongoose.Schema({
  cargoId: {
    type: String,
    required: true,
  },
  cargoName: {
    type: String,
    required: true,
  },
  cargoType: String,
  weightKg: String,
  quantity: String,
  companyName: String,
  originPort: String,
  destinationPort: String,
  containerNumber: String,
  shippingDate: String,
  deliveryStatus: String,
  cargoValue: String
}, {
  timestamps: true
});

// Apply the custom toJSON/toObject serialization plugin
cargoSchema.plugin(toJSON);

const Cargo = mongoose.model("Cargo", cargoSchema);

module.exports = Cargo;
