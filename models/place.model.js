const mongoose = require("mongoose");

const placeSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
  },
  { timestamps: true }
);

const placesModel = mongoose.model("places", placeSchema);

module.exports = placesModel;
