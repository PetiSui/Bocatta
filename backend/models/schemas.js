const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  entryDate: { type: Date, default: Date.now() },
  address: { type: String },
  name: { type: String },
  id: { type: String },
  telephone: { type: String },
  url: { type: String },
  website: { type: String },
  photos: { type: String },
  rating: { type: Number },
  priceLevel: { type: Number },
  totalReviews: { type: String },
  categories: { type: Array },
});

const Cards = mongoose.model("Cards", cardSchema, "cards");
const mySchemas = { 'Cards': Cards };

module.export = mySchemas;
