//const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const {
  drugsList,
  updateDrug,
  findDrug,
  findOneDrugAndUpdate,
  deleteDrug,
} = require("./../controllers/drugsController");

router.post("/", updateDrug);

router.get("/", drugsList);

router.get("/:id", findDrug);

router.patch("/:id", findOneDrugAndUpdate);

router.delete("/:id", deleteDrug);

module.exports = router;
