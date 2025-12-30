class Service {
  constructor(model = String) {
    this.model = model;
  }

  getTodos = async () => {
    return this.model.findAll();
  };

  getUm = async (id) => {
    return this.model.findByPk(id);
  };

  postRegistro = async (dados) => {
    return this.model.create(dados);
  };

  putRegistro = async (id, dados) => {
    const compra = await this.model.findByPk(id);
    await compra.update(dados);

    return compra;
  };

  deleteRegistro = async (id) => {
    await this.model.destroy({ where: { id: id } });
  };
}

module.exports = Service;
