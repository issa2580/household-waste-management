const mongoose = require("mongoose");

const horaireSchema = new mongoose.Schema({
  Zone1: { type: String, required: true },
  Zone2: { type: String, required: true },
  Zone3: { type: String, required: true },
  Zone4: { type: String, required: true },
  Zone5: { type: String, required: true },
});

const Horaire = mongoose.model("Horaire", horaireSchema);

module.exports = Horaire;
