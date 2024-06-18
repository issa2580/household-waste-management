const express = require("express");
const router = express.Router();
const {
  addEmplacement,
  getEmplacement,
  getEmplacementById,
} = require("../controllers/emplacementCtl");

router.post("/emplacement", addEmplacement);
router.get("/emplacements", getEmplacement);
router.get("/emplacement/:id", getEmplacementById);

module.exports = router;
