const Sequelize = require("sequelize");
const instacia = require("../../Banco-de-dados");

const colunas = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.ENUM("ração", "brinquedos"),
    allowNull: false,
  },
};

const opcoes = {
  freezeTableName : true,
  tableName : 'fornecedores',
  timesTamps: true,
  createAt: 'dataCriacao',
  updateAt: 'dataAtualizacao',
  version:'vercao'
}
module.exports = instacia.define('fornecedor', colunas, opcoes)