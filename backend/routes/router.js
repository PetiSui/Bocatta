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

  let cardData = {
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

  if (photos.substring(0, 5) === "https") {
    //IS URL, NOT BASE64
    const newPhotoUrl = await axios.get(cardData.photos).then((res) => {
      //console.log(res.request._redirectable._options.href);
      return res.request._redirectable._options.href;
    });
    if (newPhotoUrl) {
      cardData = { ...cardData, photos: newPhotoUrl };
    }
  }

  //console.log(cardData);

  const card = new schemas.Card(cardData);
  const saveCard = await card.save().then(data => console.log("INSERT SUCCESSFUL\n" + data)).catch((err) => console.log("DATA NOT INSERTED!"));
  if (saveCard) {
    res.send("OK");
  }

  res.end();
});

module.exports = router;
