const express = require("express");
const router = express.Router();
const { addRoad, getRoad, getRoadById } = require("../controllers/roadCtl");

// router.get("/road", getItineraires);
router.post("/road", addRoad);
router.get("/roads", getRoad);
router.get("/road/:id", getRoadById);

module.exports = router;
