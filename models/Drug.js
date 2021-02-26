const mongoose = require("mongoose");

const DrugSchema = mongoose.Schema({
  name: String,
  typeDrug: String,
  amount: Number,
  date: Date.now,
  price: Number,
  Localization: String,
});

module.exports = mongoose.model("Drug", DrugSchema);
