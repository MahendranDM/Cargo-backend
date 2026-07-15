const Port = require("../models/port.model");

/**
 * Search ports by query string.
 * Route: GET /search-port?q=...
 */
exports.searchPorts = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        status: "failed",
        message: "Search query 'q' is required",
      });
    }

    // Search against multiple fields using regex case-insensitive search
    const ports = await Port.find({
      $or: [
        { port_id: { $regex: q, $options: "i" } },
        { port_name: { $regex: q, $options: "i" } },
        { city: { $regex: q, $options: "i" } },
        { port_manager: { $regex: q, $options: "i" } },
      ],
    });

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
