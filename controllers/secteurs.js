const Secteur = require("../models/secteurs");

const addSecteur = async (req, res) => {
  const { name } = req.body;
  try {
    const newSecteur = new Secteur({ name });
    await newSecteur.save();
    res.status(201).json(newSecteur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addSecteur };
