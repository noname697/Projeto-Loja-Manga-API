const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller.js");
const { Usuario } = require("../database/models/index.js");

router.get("/users", (req, res) => {
  const controller = new Controller(Usuario);
  controller.pegaTodos(req, res);
});

module.exports = router;
