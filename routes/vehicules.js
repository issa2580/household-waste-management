const express = require("express");
const router = express.Router();
const { addVehicule } = require("../controllers/vehicules");

router.post("/vehicules", addVehicule);

module.exports = router;
