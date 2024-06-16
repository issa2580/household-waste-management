const pointCollects = require("../models/pointCollectsModels");

const addPOintOfCollectsArea = async (req, res) => {
  const { sectorId, pointColects } = req.body;
  try {
    const newpointColects = new pointCollects({
      sector: sectorId,
      pointColects: pointColects,
    });
    const pointColect = await newpointColects.save();
    res.status(201).json(pointColect);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPOintOfCollectsArea = async (req, res) => {
  try {
    const pointColect = await pointCollects.find().populate("sector", "name");
    res.json({ pointColect });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPOintOfCollectsAreaById = async (req, res) => {
  const pointColectId = req.params.id;
  try {
    const pointColect = await pointCollects
      .findById(pointColectId)
      .populate("sector", "name");
    if (!pointColect) {
      return res.status(404).json({ message: "pointColect non trouvé" });
    }
    res.json({ pointColect });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addPOintOfCollectsArea,
  getPOintOfCollectsArea,
  getPOintOfCollectsAreaById,
};
