const { expect } = require("chai");
const sinon = require("sinon");
const { salesProductModel } = require("../../../src/models");
const { getAll,insertSales,findById} = require("../../../src/services/salesProductService");
const {
  newSaleItem,
  saleProducts,
  newSaleItemHappy,
  saleWihtoutProductId,
  happyInsertsaleProduct,
} = require("./mocks/salesService.mock");

describe('Verificando service para sales Product ', function () {
  //arrange recuperando toda lista e inserindo um nome
  beforeEach(function () {
    sinon.stub(salesProductModel, 'getAll')
       .resolves(saleProducts); //mockar o retorno
   
  });
  afterEach(function () {
    sinon.restore();
  });
  it("verifica listagem do produtos", async function () {
    //act
    const result = await getAll();
    //assert
    expect(result).to.deep.equal(saleProducts);
  });
     /*  it("verifica se é possível cadastrar novo produto", async function () {
    //arrange e importar mocks
      sinon.stub(salesProductModel, "insertSales").resolves(happyInsertsaleProduct); 
    //act
    const result = await insertSales(newSaleItemHappy); 
    //assert
    expect(result).to.deep.equal(newSaleItemHappy);
     });    */
   it("verifica cadastro de venda sem passar productId", async function () {
    //arrange
    sinon.stub(salesProductModel, "insertSales").resolves({inserId:''});
    //act
    const result = await insertSales(saleWihtoutProductId);
    //assert
    expect(result.type).to.equal(400);
    expect(result.message).to.equal('"productId" is required');
  }); 
})