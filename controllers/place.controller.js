const placeModel = require("../models/place.model");

const getOnePlace = async (req, res) => {
  slug = req.params.slug;
  try {
    const foundPlace = await placeModel.findOne({ slug });
    if (foundPlace) res.status(200).send(foundPlace);
    else res.status(400).send(`no such place exists`);
  } catch (error) {
    res.status(403).send(error);
  }
};

const addPlace = async (req, res) => {
  try {
    const newPlace = new placeModel(req.body);
    const placeRes = await newPlace.save();
    res.status(201).send(placeRes);
  } catch (error) {
    console.log(error);
    res.status(403).send(error);
  }
};

const getManyPlaces = async (req, res) => {
  try {
    const places = await placeModel.find(req.query);
    res.status(200).send(places);
  } catch (error) {
    res.status(403).send(error);
  }
};

module.exports = { getOnePlace, addPlace, getManyPlaces };
