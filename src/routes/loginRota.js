const SessaoController = require("../controllers/SessaoController");
const express = require("express");
const router = express.Router();

router.post("/login", SessaoController.store);

module.exports = router;
