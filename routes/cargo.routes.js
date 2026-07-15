const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargo.controller");
const searchCargoController = require("../controllers/searchCargo.controller");

router.get("/view-cargo", cargoController.getCargos);
router.post("/add-cargo", cargoController.createCargo);
router.get("/search-cargo", searchCargoController.searchCargos);

module.exports = router;
