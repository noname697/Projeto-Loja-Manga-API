const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const { Usuario } = require("../database/models/index.js");

router.get("/", (req, res) => {
  const controller = new Controller(Usuario);
  controller.pegaTodos(req, res);
});

router.get("/:id", (req, res) => {
  const controller = new Controller(Usuario);
  controller.pegaUm(req, res);
});

module.exports = router;
