const Horaire = require("../models/horaires");

const addHoraire = async (req, res) => {
  const { Zone1, Zone2, Zone3, Zone4, Zone5 } = req.body;
  try {
    const newHoraire = new Horaire({ Zone1, Zone2, Zone3, Zone4, Zone5 });
    await newHoraire.save();
    res.status(201).json(newHoraire);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addHoraire };
