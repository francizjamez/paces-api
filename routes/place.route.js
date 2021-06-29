const express = require("express");
const {
  getOnePlace,
  addPlace,
  getManyPlaces,
} = require("../controllers/place.controller");

const placeRouter = express.Router();

placeRouter.get("/:slug", getOnePlace);
placeRouter.get("/", getManyPlaces);
placeRouter.post("/", addPlace);

module.exports = placeRouter;
