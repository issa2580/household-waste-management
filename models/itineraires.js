const mongoose = require("mongoose");

const itineraireSchema = new mongoose.Schema({
  matricule: { type: String, required: true },
  secteur: { type: String, required: true },
  zones: {
    Zone1: { type: String, required: true },
    Zone2: { type: String, required: true },
    Zone3: { type: String, required: true },
    Zone4: { type: String, required: true },
    Zone5: { type: String, required: true },
  },
});

const Itineraire = mongoose.model("Itineraire", itineraireSchema);

module.exports = Itineraire;
