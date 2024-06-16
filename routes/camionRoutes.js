const express = require("express");
const router = express.Router();
const {
  addCamion,
  getCamions,
  getCamion,
} = require("../controllers/camionCtl");

router.post("/camion", addCamion);
router.get("/camions", getCamions);
router.get("/camion/:id", getCamion);

module.exports = router;
