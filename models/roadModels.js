const mongoose = require("mongoose");
const Camion = require("./camionModels");
const Secteur = require("./secteurModels");
const SiteVisit = require("./hoursPerAreaModels");

const roadSchema = new mongoose.Schema({
  camion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Camion,
    required: true,
  },
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Secteur,
    required: true,
  },
  siteVisit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SiteVisit,
    required: true,
  },
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
