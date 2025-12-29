class Service {
  constructor(model = String) {
    this.model = model;
  }

  getTodos = async (model) => {
    return model.findAll();
  };
}

module.exports = Service;
