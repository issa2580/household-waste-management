const Secteur = require("../models/secteurModels");

const addSecteur = async (req, res) => {
  const { name } = req.body;
  try {
    const newSecteur = new Secteur({ name });
    await newSecteur.save();
    res.status(201).json(newSecteur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSecteurs = async (req, res) => {
  try {
    const secteurs = await Secteur.find();
    res.status(200).json({ secteurs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSecteur = async (req, res) => {
  try {
    const secteur = await Secteur.findById(req.params.id);
    res.status(200).json({ secteur });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addSecteur, getSecteurs, getSecteur };
