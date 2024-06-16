const mongoose = require("mongoose");
const Secteur = require("../models/secteurModels");

const siteVisitSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  timeSpent: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const hoursPerAreaSchema = new mongoose.Schema({
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Secteur,
    required: true,
  },
  siteVisits: [siteVisitSchema],
});

const Horaire = mongoose.model("Horaire", hoursPerAreaSchema);

module.exports = Horaire;
