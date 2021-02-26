const express = require("express");
const router = express.Router();
const Drug = require("../models/Drug");

router.get("/", async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const drug = Drug({
    name: req.body.name,
    typeDrug: req.body.typeDrug,
    amount: req.body.amount,
    price: req.body.price,
    localization: req.body.localization,
  });
  try {
    const savedDrug = await drug.save();
    res.json(savedDrug);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
