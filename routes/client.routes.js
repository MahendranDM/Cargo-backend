const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");
const searchClientController = require("../controllers/searchClient.controller");
const deleteClientController = require("../controllers/deleteClient.controller");

router.post("/view-client", clientController.getClients);
router.post("/add-client", clientController.createClient);
router.get("/search-client", searchClientController.searchClients);
router.delete("/delete-client/:companyId", deleteClientController.deleteClient);

module.exports = router;
