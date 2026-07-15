const express = require("express");
const router = express.Router();
const cargoController = require("../controllers/cargo.controller");
const searchCargoController = require("../controllers/searchCargo.controller");
const deleteCargoController = require("../controllers/deleteCargo.controller");

router.get("/view-cargo", cargoController.getCargos);
router.post("/add-cargo", cargoController.createCargo);
router.get("/search-cargo", searchCargoController.searchCargos);
router.delete("/delete-cargo/:cargoId", deleteCargoController.deleteCargo);

module.exports = router;
