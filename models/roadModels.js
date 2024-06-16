const mongoose = require("mongoose");
const Camion = require("./camionModels");
const Secteur = require("./secteurModels");
const PointCollect = require("./pointCollectsModels");

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
  pointCollect: {
    type: mongoose.Schema.Types.ObjectId,
    ref: PointCollect,
    required: true,
  },
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
