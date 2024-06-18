const Emplacement = require("../models/emplacementModels");

const addEmplacement = async (req, res) => {
  const { siteVisits } = req.body;
  try {
    const newEmplacement = new Emplacement({
      siteVisits: siteVisits,
    });
    const emplacement = await newEmplacement.save();
    res.status(201).json(emplacement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmplacement = async (req, res) => {
  try {
    const emplacement = await Emplacement.find();
    res.json({ emplacement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmplacementById = async (req, res) => {
  const emplacementId = req.params.id;
  try {
    const emplacement = await Emplacement.findById(emplacementId);
    if (!emplacement) {
      return res.status(404).json({ message: "emplacement non trouvé" });
    }
    res.json({ emplacement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addEmplacement, getEmplacement, getEmplacementById };
