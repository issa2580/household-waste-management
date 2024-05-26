const Itineraire = require("../models/itineraires");

const getItineraires = async (req, res) => {
  try {
    const itineraires = await Itineraire.find();
    res.json(itineraires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addItineraire = async (req, res) => {
  const { matricule, secteur, zones } = req.body;
  try {
    const newItineraire = new Itineraire({ matricule, secteur, zones });
    await newItineraire.save();
    res.status(201).json(newItineraire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getItineraires, addItineraire };
