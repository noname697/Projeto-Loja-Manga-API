const Service = require("./Service.js");
const {
  Produto,
  Usuario,
  CompraProdutos,
  sequelize,
} = require("../database/models/index.js");

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

  realizarCompra = async (dadosCompra) => {
    const { usuario_id, endereco, valor, produtos } = dadosCompra;
    const t = await sequelize.transaction();

    try {
      const novaCompra = await this.model.create(
        {
          codigo_compra: usuario_id,
          endereco,
          valor,
          status: "Processando",
        },
        { transaction: t }
      );
      const itensParaInserir = produtos.map((item) => ({
        compra_id: novaCompra.id,
        produto_id: item.produto_id,
        quantidade: item.quantidade,
      }));
      await CompraProdutos.bulkCreate(itensParaInserir, { transaction: t });
      await t.commit();

      return novaCompra;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  };
}

module.exports = ServiceCompra;
