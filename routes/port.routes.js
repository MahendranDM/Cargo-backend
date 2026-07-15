const express = require("express");
const router = express.Router();
const portController = require("../controllers/port.controller");
const searchPortController = require("../controllers/searchPort.controller");

router.post("/view-port", portController.getPorts);
router.post("/add-port", portController.createPort);
router.get("/search-port", searchPortController.searchPorts);

module.exports = router;
