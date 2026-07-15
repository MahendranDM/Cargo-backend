const mongoose = require("mongoose");
const toJSON = require("../utils/toJSON.plugin");

const clientSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  contactPerson: String,
  phoneNumber: String,
  emailAddress: String,
  companyAddress: String,
  city: String,
  country: String,
  gstNumber: String,
  businessType: String,
}, {
  timestamps: true // Adding timestamps is a professional best practice
});

// Apply the custom toJSON/toObject serialization plugin
clientSchema.plugin(toJSON);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
