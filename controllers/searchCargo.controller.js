const Cargo = require("../models/cargo.model");

/**
 * Search cargo records by query string.
 * Route: GET /search-cargo?q=...
 */
exports.searchCargos = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        status: "failed",
        message: "Search query 'q' is required",
      });
    }

    // Search against multiple fields using regex case-insensitive search
    const cargos = await Cargo.find({
      $or: [
        { cargoId: { $regex: q, $options: "i" } },
        { cargoName: { $regex: q, $options: "i" } },
        { companyName: { $regex: q, $options: "i" } },
        { containerNumber: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(cargos);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
