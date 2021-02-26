//const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const Drug = require("../models/Drug");
const { drugsList, updateDrug } = require("./../controllers/drugsController");

router.post("/", updateDrug);

router.get("/", drugsList);

router.get("/:id", async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    res.json(drug);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const drug = await Drug.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        typeDrug: req.body.typeDrug,
        amount: req.body.amount,
        price: req.body.price,
        localization: req.body.localization,
      }
    );
    res.json(drug);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeDrug = await Drug.remove({ _id: req.params.id });
    res.json(removeDrug);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
