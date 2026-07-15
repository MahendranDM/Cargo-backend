const Client = require("../models/client.model");

/**
 * Search clients by query string.
 * Route: GET /search-client?q=...
 */
exports.searchClients = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        status: "failed",
        message: "Search query 'q' is required",
      });
    }

    // Search against multiple fields using regex case-insensitive search
    const clients = await Client.find({
      $or: [
        { companyId: { $regex: q, $options: "i" } },
        { companyName: { $regex: q, $options: "i" } },
        { contactPerson: { $regex: q, $options: "i" } },
        { city: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
