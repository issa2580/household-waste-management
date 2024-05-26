const Vehicule = require("../models/vehicules");

const addVehicule = async (req, res) => {
  const { matricule } = req.body;
  try {
    const newVehicle = new Vehicule({ matricule });
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addVehicule };
