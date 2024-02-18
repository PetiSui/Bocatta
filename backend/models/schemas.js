const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  entryDate: { type: Date, default: Date.now() },
  address: { type: String },
  name: { type: String },
  _id: { type: String },
  telephone: { type: String },
  url: { type: String },
  website: { type: String },
  photos: { type: String },
  rating: { type: Number },
  priceLevel: { type: Number },
  categories: { type: Array }
});

const Card = mongoose.model("Cards", cardSchema, "cards");

const mySchemas = { 'Card':Card };

module.exports = mySchemas;
