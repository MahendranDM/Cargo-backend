const mongoose = require("mongoose");
const toJSON = require("../utils/toJSON.plugin");

const portSchema = new mongoose.Schema({
  port_id: {
    type: String,
    required: true,
  },
  port_name: {
    type: String,
    required: true,
  },
  port_code: String,
  city: String,
  country: String,
  port_type: String,
  maximum_cargo_capacity: String,
  contact_number: String,
  port_manager: String,
  operational_status: String,
}, {
  timestamps: true
});

// Apply the custom toJSON/toObject serialization plugin
portSchema.plugin(toJSON);

const Port = mongoose.model("Port", portSchema);

module.exports = Port;
