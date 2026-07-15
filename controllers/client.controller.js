const Client = require("../models/client.model");

/**
 * Get all client records.
 * Route: POST /view-client (retaining the original POST method mapping)
 */
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/**
 * Add a new client.
 * Route: POST /add-client
 */
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Client Added Successfully",
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
