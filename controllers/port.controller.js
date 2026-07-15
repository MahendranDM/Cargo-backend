const Port = require("../models/port.model");

/**
 * Get all port records.
 * Route: POST /view-port
 */
exports.getPorts = async (req, res) => {
  try {
    const ports = await Port.find();
    res.status(200).json({
      status: "success",
      data: ports,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/**
 * Add a new port.
 * Route: POST /add-port
 */
exports.createPort = async (req, res) => {
  try {
    const port = await Port.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Port Added Successfully",
      data: port,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
