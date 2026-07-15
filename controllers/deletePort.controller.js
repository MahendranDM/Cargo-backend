const Port = require("../models/port.model");

/**
 * Delete port by port_id.
 * Route: DELETE /delete-port/:port_id
 */
exports.deletePort = async (req, res) => {
  try {
    const { port_id } = req.params;
    const port = await Port.findOneAndDelete({ port_id });

    if (!port) {
      return res.status(404).json({
        status: "failed",
        message: `Port with port_id '${port_id}' not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Port deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
