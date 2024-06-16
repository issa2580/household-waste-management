const mongoose = require("mongoose");

const camionSchema = new mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  capacities: { type: String, required: true },
});

const Camion = mongoose.model("Camion", camionSchema);

module.exports = Camion;
