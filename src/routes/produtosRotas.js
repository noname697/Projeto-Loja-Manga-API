const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const { Produto } = require("../database/models/index.js");
const controller = new Controller(Produto);
const authMiddleware = require("../middlewares/auth.js");

router.use(authMiddleware);

router.get("/", (req, res) => {
  controller.pegaTodos(req, res);
});

router.get("/:id", (req, res) => {
  controller.pegaUm(req, res);
});

router.post("/", (req, res) => {
  controller.criaRegistro(req, res);
});

router.put("/:id", (req, res) => {
  controller.atualizaRegistro(req, res);
});

router.delete("/:id", (req, res) => {
  controller.excluiRegistro(req, res);
});

module.exports = router;
