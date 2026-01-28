const SessaoController = require("../controllers/SessaoController");
const express = require("express");
const router = express.Router();
const sessaoController = new SessaoController();


router.post("/", (req, res) => sessaoController.store(req, res));

module.exports = router;
