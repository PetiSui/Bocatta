const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");
const axios = require("axios");

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
  } = req.body;

  const cardData = {
    address: address,
    name: name,
    _id: id,
    telephone: telephone,
    url: url,
    website: website,
    photos: photos,
    rating: rating,
    priceLevel: priceLevel,
    categories: categories,
  };

  await axios.get(cardData.photos).then(res => {
    console.log(res.request._redirectable._options.href);
    return res.request._redirectable._options.href;
  });

  console.log(cardData);
  const card = new schemas.Card(cardData);
  const saveCard = await card.save().catch(err=>console.log("DB ERROR"));
  if (saveCard) {
    res.send("OK");
  }

  res.end();
});

module.exports = router;
