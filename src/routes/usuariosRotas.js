const express = require("express");
const { Usuario } = require("../database/models/index.js");
const ControllerUsuario = require("../controllers/ControllerUsuario.js");
const controllerUsuario = new ControllerUsuario(Usuario);
const authMiddleware = require("../middlewares/auth.js");
const router = express.Router();

router.use(authMiddleware);

router.get("/", (req, res) => {
  controllerUsuario.pegaTodos(req, res);
});

router.get("/:id", (req, res) => {
  controllerUsuario.pegaUm(req, res);
});

router.post("/", (req, res) => {
  controllerUsuario.cadastrarUsuario(req, res);
});

router.put("/:id", (req, res) => {
  controllerUsuario.atualizaRegistro(req, res);
});

router.delete("/:id", (req, res) => {
  controllerUsuario.excluiRegistro(req, res);
});

module.exports = router;
