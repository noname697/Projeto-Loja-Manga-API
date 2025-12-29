const Service = require("../services/Service.js");

class Controller {
  constructor(model = String) {
    this.model = model;
  }

  pegaTodos = async (req, res) => {
    try {
      const service = new Service(this.model);
      const registros = await service.getTodos(this.model);
      return res.status(200).json(registros);
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  };
}

module.exports = Controller;
