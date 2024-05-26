const express = require("express");
const router = express.Router();
const { addSecteur } = require("../controllers/secteurs");

router.post("/secteurs", addSecteur);

module.exports = router;
