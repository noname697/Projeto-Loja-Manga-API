const Service = require("../services/ServiceCompra.js");

class Controller {
  constructor(model = String) {
    this.model = model;
    this.service = new Service(this.model);
  }

  pegaTodos = async (req, res) => {
    try {
      const registros = await this.service.getTodos();

      return res.status(200).json(registros);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  pegaUm = async (req, res) => {
    try {
      const { id } = req.params;
      const registro = await this.service.getUm(id);

      return res.status(200).json(registro);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  criaRegistro = async (req, res) => {
    try {
      const registro = await this.service.postRegistro(req.body);
      return res.status(200).json({ "Registro Criado": registro });
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  atualizaRegistro = async (req, res) => {
    try {
      const { id } = req.params;
      const registro = await this.service.putRegistro(id, req.body);
      return res.status(200).json({ "Registro Atualizado": registro });
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  excluiRegistro = async (req, res) => {
    try {
      const { id } = req.params;
      await this.service.deleteRegistro(id);
      return res.status(200).json({ "Registro Excluído": `id ${id} deletado` });
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };
}

module.exports = Controller;

/*
	{
		"id": 1,
		"nome": "Ana Silva Sauro",
		"email": "ana@email.com",
		"senha": "123",
		"createdAt": "2025-12-29T21:41:38.920Z",
		"updatedAt": "2025-12-30T17:00:56.705Z"
	}
*/ 