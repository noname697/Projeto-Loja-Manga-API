const ServiceCompra = require("../services/ServiceCompra.js");
const Controller = require("./Controller.js");
const { Compra } = require("../database/models/index.js");

class ControllerCompra extends Controller {
  constructor(model = Compra) {
    super(model);
  }

  pegaUmInner = async (req, res) => {
    try {
      const { id } = req.params;
      const service = new ServiceCompra(this.model);
      const registro = await service.getUmInner(id);

      return res.status(200).json(registro);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  criarNovaCompra = async (req, res) => {
    try {
      const { usuario_id, endereco, valor, produtos } = req.body;
      const serviceCompra = new ServiceCompra(this.model);

      if (!produtos || produtos.length === 0) {
        return res
          .status(400)
          .json({ message: "O carrinho não pode estar vazio." });
      }

      const compra = await serviceCompra.realizarCompra({
        usuario_id,
        endereco,
        valor,
        produtos,
      });

      return res.status(201).json({
        message: "Compra realizada com sucesso!",
        compra,
      });
    } catch (error) {
      console.error("Erro no Controller de Compra:", error);
      return res.status(500).json({
        message: "Erro interno ao processar a compra.",
        error: error.message,
      });
    }
  };
}

module.exports = ControllerCompra;
