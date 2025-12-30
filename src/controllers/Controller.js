const Service = require("../services/Service.js");

class Controller {
  constructor(model = String) {
    this.model = model;
  }

  pegaTodos = async (req, res) => {
    try {
      const service = new Service(this.model);
      const registros = await service.getTodos();

      return res.status(200).json(registros);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };

  pegaUm = async (req, res) => {
    try {
      const { id } = req.params;
      const service = new Service(this.model);
      const registro = await service.getUm(id);

      return res.status(200).json(registro);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };
}

module.exports = Controller;
