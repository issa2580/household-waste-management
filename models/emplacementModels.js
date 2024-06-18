const mongoose = require("mongoose");

const siteVisitSchema = new mongoose.Schema({
  siteName: { type: String, required: true },
  timeSpent: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const emplacementSchema = new mongoose.Schema({
  siteVisits: [siteVisitSchema],
});

const Emplacement = mongoose.model("Emplacement", emplacementSchema);

module.exports = Emplacement;
