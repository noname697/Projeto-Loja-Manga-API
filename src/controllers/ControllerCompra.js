const ServiceCompra = require("../services/ServiceCompra.js");
const Controller = require("./Controller.js");

class ControllerCompra extends Controller {
  constructor(model) {
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
}

module.exports = ControllerCompra;
