const Client = require("../models/client.model");

/**
 * Delete client by companyId.
 * Route: DELETE /delete-client/:companyId
 */
exports.deleteClient = async (req, res) => {
  try {
    const { companyId } = req.params;
    const client = await Client.findOneAndDelete({ companyId });

    if (!client) {
      return res.status(404).json({
        status: "failed",
        message: `Client with companyId '${companyId}' not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Client deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
