const express = require("express");
const router = express.Router();
const Drug = require("../models/Drug");

router.get("/", (req, res) => {
  res.send("Drugs lists!");
});

router.post("/", (req, res) => {
  const drug = Drug({
    name: req.body.name,
    typeDrug: req.body.typeDrug,
    amount: req.body.amount,
    price: req.body.price,
    localization: req.body.localization,
  });

  drug
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      message: error;
    });
});

module.exports = router;
