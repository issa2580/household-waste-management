const express = require("express");
const router = express.Router();
const { getItineraires, addItineraire } = require("../controllers/itineraires");

router.get("/itineraires", getItineraires);
router.post("/itineraires", addItineraire);

module.exports = router;
