const Service = require("./Service.js")
const { Produto, Usuario } = require("../database/models/index.js");

class ServiceCompra extends Service {
  constructor(model) {
    super(model);
  }

  getUmInner = async (id) => {
    return this.model.findByPk(id, {
      include: [
        { model: Produto, as: "produtos" },
        { model: Usuario, as: "usuario" },
      ],
    });
  };
}

module.exports = ServiceCompra;
