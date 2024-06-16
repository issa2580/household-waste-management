const express = require("express");
const router = express.Router();
const {
  addHoraire,
  getHoraires,
  getHoraireById,
} = require("../controllers/hoursPerAreaCtl");

router.post("/sitevisite", addHoraire);
router.get("/sitevisites", getHoraires);
router.get("/sitevisite/:id", getHoraireById);

module.exports = router;
