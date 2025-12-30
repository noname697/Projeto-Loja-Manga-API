const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const { Produto } = require("../database/models/index.js");


router.get("/", (req, res) => {
  const controller = new Controller(Produto);
  controller.pegaTodos(req, res);
});

router.get("/:id", (req, res) => {
  const controller = new Controller(Produto);
  controller.pegaUm(req, res);
});

module.exports = router;
