const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const { Usuario } = require("../database/models/index.js");
const controller = new Controller(Usuario);

router.get("/", (req, res) => {
  controller.pegaTodos(req, res);
});

router.get("/:id", (req, res) => {
  controller.pegaUm(req, res);
});

router.post("/", (req, res) => {
  controller.criaRegistro(req, res);
});

module.exports = router;
