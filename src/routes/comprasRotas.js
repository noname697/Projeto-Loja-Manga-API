const express = require("express");
const router = express.Router();
const ControllerCompra = require("../controllers/ControllerCompra.js");

router.get("/", (req, res) => {
  const controller = new ControllerCompra();
  controller.pegaTodos(req, res);
});
router.get("/:id", (req, res) => {
  const controllerCompra = new ControllerCompra();
  controllerCompra.pegaUmInner(req, res);
});

module.exports = router;
