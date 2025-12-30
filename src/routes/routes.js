const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const ControllerCompra = require("../controllers/ControllerCompra.js")
const { Usuario, Produto, Compra } = require("../database/models/index.js");

router.get("/usuarios", (req, res) => {
  const controller = new Controller(Usuario);
  controller.pegaTodos(req, res);
});
router.get("/produtos", (req, res) => {
  const controller = new Controller(Produto);
  controller.pegaTodos(req, res);
});
router.get("/compras", (req, res) => {
  const controller = new Controller(Compra);
  controller.pegaTodos(req, res);
});
router.get("/compras/:id", (req, res) => {
  const controllerCompra = new ControllerCompra(Compra);
  controllerCompra.pegaUmInner(req, res);
});

module.exports = router;
