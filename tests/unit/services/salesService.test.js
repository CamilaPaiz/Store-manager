const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");
const { getAll,insertSale} = require("../../../src/services/salesService");
const { sale, dateSale } = require("./mocks/salesService.mock");

describe('Verificando service para sales ', function () {
  //arrange recuperando toda lista e inserindo um nome
  beforeEach(function () {
    sinon.stub(salesModel, 'getAll')
      .resolves(sale); //mockar o retorno
    sinon
      .stub(salesModel, 'insertSales')
      .resolves(sale);
  });
  afterEach(function () {
    sinon.restore();
  });
  it("verifica listagem do produtos", async function () {
    //act
    const result = await getAll();
    //assert
    expect(result).to.deep.equal(sale);
  });
   /*  it("verifica se é possível cadastrar novo produto", async function () {
    //arrange e importar mocks
    //act
    const result = await insertSale(sale); 
    //assert
    expect(result).to.deep.equal(sale);
  });     */
})