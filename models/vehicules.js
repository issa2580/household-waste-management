const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
});

const Vehicule = mongoose.model("Vehicule", vehiculeSchema);

module.exports = Vehicule;
