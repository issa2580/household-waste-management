const mongoose = require("mongoose");
const Secteur = require("../models/secteurModels");

const pointColectShema = new mongoose.Schema({
  siteName: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  openHours: { type: String, required: true },
  closeHours: { type: String, required: true },
});

const POintCollectsOfArea = new mongoose.Schema({
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Secteur,
    required: true,
  },
  pointColects: [pointColectShema],
});

const pointOfCollects = mongoose.model("pointOfCollects", POintCollectsOfArea);

module.exports = pointOfCollects;
