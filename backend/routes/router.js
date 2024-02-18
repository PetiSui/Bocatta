const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/cards", async (req, res) => {
  // console.log(req.body);
  const {
    address,
    name,
    id,
    telephone,
    url,
    website,
    photos,
    rating,
    priceLevel,
    categories,
  } = JSON.parse(req.body);
  
  const cardData = {
    address: address,
    name: name,
    id: id,
    telephone: telephone,
    url: url,
    website: website,
    photos: photos,
    rating: rating,
    priceLevel: priceLevel,
    categories: categories,
  };
  console.log(cardData);
  const card = new schemas.Card(cardData);
  const saveCard = await card.save();
  if (saveCard) {
    res.send("OK");
  }

  res.end();
});

module.exports = router;
