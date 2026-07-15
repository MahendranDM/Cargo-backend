const Cargo = require("../models/cargo.model");

/**
 * Get all cargo records.
 * Route: GET /view-cargo
 */
exports.getCargos = async (req, res) => {
  try {
    const cargos = await Cargo.find();
    res.status(200).json(cargos);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/**
 * Add a new cargo record.
 * Route: POST /add-cargo
 */
exports.createCargo = async (req, res) => {
  try {
    const cargo = await Cargo.create(req.body);
    res.status(201).json({
      status: "success",
      data: cargo // Returning the newly created cargo makes it much more professional than just {"status":"success"}
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
