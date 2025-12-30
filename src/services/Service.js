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
}

module.exports = Service;
