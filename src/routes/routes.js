const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ oi: "oi" });
});

module.exports = router;
