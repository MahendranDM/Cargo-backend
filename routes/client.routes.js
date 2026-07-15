const express = require("express");
const router = express.Router();
const clientController = require("../controllers/client.controller");
const searchClientController = require("../controllers/searchClient.controller");

router.post("/view-client", clientController.getClients);
router.post("/add-client", clientController.createClient);
router.get("/search-client", searchClientController.searchClients);

module.exports = router;
