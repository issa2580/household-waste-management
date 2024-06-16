const Horaire = require("../models/hoursPerAreaModels");

const addHoraire = async (req, res) => {
  const { sectorId, siteVisits } = req.body;
  try {
    const newHoraire = new Horaire({
      sector: sectorId,
      siteVisits: siteVisits,
    });
    const horaire = await newHoraire.save();
    res.status(201).json(horaire);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHoraires = async (req, res) => {
  try {
    const horaires = await Horaire.find().populate("sector", "name");
    res.json({ horaires });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHoraireById = async (req, res) => {
  const horaireId = req.params.id;
  try {
    const horaire = await Horaire.findById(horaireId).populate(
      "sector",
      "name"
    );
    if (!horaire) {
      return res.status(404).json({ message: "Horaire non trouvé" });
    }
    res.json({ horaire });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addHoraire, getHoraires, getHoraireById };
