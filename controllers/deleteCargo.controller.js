const Cargo = require("../models/cargo.model");

/**
 * Delete cargo record by cargoId.
 * Route: DELETE /delete-cargo/:cargoId
 */
exports.deleteCargo = async (req, res) => {
  try {
    const { cargoId } = req.params;
    const cargo = await Cargo.findOneAndDelete({ cargoId });

    if (!cargo) {
      return res.status(404).json({
        status: "failed",
        message: `Cargo with cargoId '${cargoId}' not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Cargo record deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
