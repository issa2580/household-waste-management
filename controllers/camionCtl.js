const Camion = require("../models/camionModels");

const addCamion = async (req, res) => {
  const { matricule, capacities } = req.body;
  try {
    const newCamion = new Camion({ matricule, capacities });
    await newCamion.save();
    res.status(201).json(newCamion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCamions = async (req, res) => {
  try {
    const camions = await Camion.find();
    res.status(200).json({ camions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCamion = async (req, res) => {
  try {
    const camion = await Camion.findById(req.params.id);
    res.status(200).json({ camion });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { addCamion, getCamions, getCamion };
