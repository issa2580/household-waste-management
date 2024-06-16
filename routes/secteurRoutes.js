const express = require("express");
const router = express.Router();
const {
  addSecteur,
  getSecteurs,
  getSecteur,
} = require("../controllers/secteurCtl");

router.post("/secteur", addSecteur);
router.get("/secteurs", getSecteurs);
router.get("/secteur/:id", getSecteur);

module.exports = router;
