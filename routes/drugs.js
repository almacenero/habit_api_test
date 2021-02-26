const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Drugs lists!");
});

router.get("/my-drug", (req, res) => {
  res.send("My drug!");
});

module.exports = router;
