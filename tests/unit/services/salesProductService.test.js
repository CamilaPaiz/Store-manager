const { expect } = require("chai");
const sinon = require("sinon");
const { salesProductModel } = require("../../../src/models");
const { getAll,insertSales} = require("../../../src/services/salesProductService");
const { newSale } = require("./mocks/salesService.mock");

describe('Verificando service para sales Product ', function () {
  //arrange recuperando toda lista e inserindo um nome
  beforeEach(function () {
    sinon.stub(salesProductModel, 'getAll')
       .resolves(newSale); //mockar o retorno
    sinon.stub(salesProductModel, "insertSales").resolves({insertId:1}); 
  });
  afterEach(function () {
    sinon.restore();
  });
  it("verifica listagem do produtos", async function () {
    //act
    const result = await getAll();
    //assert
    expect(result).to.deep.equal(newSale);
  });
   /*  it("verifica se é possível cadastrar novo produto", async function () {
    //arrange e importar mocks
    //act
    const result = await insertSale(newSale); 
    //assert
    expect(result).to.deep.equal(newSale);
  });      */
})