const express = require("express");
const router = express.Router();
const {
  addPOintOfCollectsArea,
  getPOintOfCollectsArea,
  getPOintOfCollectsAreaById,
} = require("../controllers/pointCollectsCtl");

router.post("/pointcollect", addPOintOfCollectsArea);
router.get("/pointcollects", getPOintOfCollectsArea);
router.get("/pointcollect/:id", getPOintOfCollectsAreaById);

module.exports = router;
