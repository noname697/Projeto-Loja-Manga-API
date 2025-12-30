const ServiceCompra = require("../services/ServiceCompra.js");
const Controller = require("./Controller.js");
const { Compra } = require("../database/models/index.js");

class ControllerCompra extends Controller {
  constructor(model = Compra) {
    super(model);
    this.service = new ServiceCompra(model);
  }

  pegaUmInner = async (req, res) => {
    try {
      const { id } = req.params;
      const registro = await this.service.getUmInner(id);

      return res.status(200).json(registro);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  criarNovaCompra = async (req, res) => {
    try {
      const { usuario_id, endereco, valor, produtos } = req.body;

      if (!produtos || produtos.length === 0) {
        return res
          .status(400)
          .json({ message: "O carrinho não pode estar vazio." });
      }

      const compra = await this.service.realizarCompra({
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

  atualizarCompra = async (req, res) => {
    try {
      const { id } = req.params;
      const dados = req.body;

      const compraAtualizada = await this.service.atualizarCompra(id, dados);

      return res.status(200).json({
        message: "Compra e itens atualizados com sucesso!",
        compra: compraAtualizada,
      });
    } catch (error) {
      return res
        .status(error.message === "Compra não encontrada" ? 404 : 500)
        .json({
          message: "Erro ao atualizar compra.",
          error: error.message,
        });
    }
  };

  excluirCompra = async (req, res) => {
    try {
      const { id } = req.params;
      await this.service.excluirCompra(id);

      return res.status(204).json({ mensagem: "Compra excluída com sucesso." });
    } catch (error) {
      if (error.message === "Compra não encontrada") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro ao excluir compra." });
    }
  };
}

module.exports = ControllerCompra;
