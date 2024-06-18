const Road = require("../models/roadModels");

const addRoad = async (req, res) => {
  const { camionId, sectorId, siteVisitId } = req.body;
  try {
    const newRoad = new Road({
      camion: camionId,
      sector: sectorId,
      siteVisit: siteVisitId,
    });
    const road = await newRoad.save();
    res.status(201).json(road);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoad = async (req, res) => {
  try {
    const road = await Road.find()
      .populate("camion", "matricule")
      .populate("sector", "name")
      .populate("siteVisit", "siteVisits");
    res.json(road);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoadById = async (req, res) => {
  const roadId = req.params.id;
  try {
    const road = await Road.findById(roadId)
      .populate("camion", "matricule")
      .populate("sector", "name")
      .populate("siteVisit", "siteVisit");
    if (!road) {
      return res.status(404).json({ message: "Itinéraire non trouvé" });
    }
    res.json(road);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addRoad, getRoad, getRoadById };
