const Drug = require("../models/Drug");

const drugsList = async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    res.json({ message: error });
  }
};

const updateDrug = async (req, res) => {
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
};

module.exports = {
  drugsList,
  updateDrug,
};
