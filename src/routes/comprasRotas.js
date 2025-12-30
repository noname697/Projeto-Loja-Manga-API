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

router.put("/:id", (req, res) => {
  controllerCompra.atualizaRegistro(req, res);
});
/* Exemplo de body para PUT
  {
    "endereco": "Rua dos testes",
		"valor": 36,
		"codigo_compra": 11,
    "produtos": [
      { "produto_id": 6, "quantidade": 1 }
    ]
  }
*/

module.exports = router;
