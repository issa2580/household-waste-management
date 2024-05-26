const express = require("express");
const router = express.Router();
const { addHoraire } = require("../controllers/horaires");

router.post("/horaires", addHoraire);

module.exports = router;
