const Service = require("../services/Service.js");

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
}

module.exports = Controller;
