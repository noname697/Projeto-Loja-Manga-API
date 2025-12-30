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

  atualizarCompra = async (id, dadosAtualizados) => {
    const { codigo_compra, endereco, valor, status, produtos } =
      dadosAtualizados;
    const t = await sequelize.transaction();

    try {
      // 1. Verificar se a compra existe
      const compra = await this.model.findByPk(id);
      if (!compra) throw new Error("Compra não encontrada");

      // 2. Atualizar dados básicos da Compra
      await compra.update(
        { codigo_compra, endereco, valor, status },
        { transaction: t }
      );

      // 3. Lidar com os Produtos (se enviados no PUT)
      if (produtos && produtos.length > 0) {
        // A) Remove todos os itens antigos desta compra na tabela intermediária
        await CompraProdutos.destroy({
          where: { compra_id: id },
          transaction: t,
        });

        // B) Prepara os novos itens
        const novosItens = produtos.map((item) => ({
          compra_id: id,
          produto_id: item.produto_id,
          quantidade: item.quantidade,
        }));

        // C) Insere os novos itens
        await CompraProdutos.bulkCreate(novosItens, { transaction: t });
      }

      await t.commit();
      return compra;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  };

  excluirCompra = async (id) => {
    const t = await sequelize.transaction();

    try {
      const compra = await this.model.findByPk(id);

      if (!compra) {
        throw new Error("Compra não encontrada");
      }

      await compra.destroy({ transaction: t });

      await t.commit();
      return true;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  };
}

module.exports = ServiceCompra;
