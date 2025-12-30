const express = require("express");
const router = express.Router();
const ControllerCompra = require("../controllers/ControllerCompra.js");
const controllerCompra = new ControllerCompra();

router.get("/", (req, res) => {
  controllerCompra.pegaTodos(req, res);
});
router.get("/:id", (req, res) => {
  controllerCompra.pegaUmInner(req, res);
});

router.post("/", (req, res) => {
  controllerCompra.criarNovaCompra(req, res);
});

module.exports = router;
