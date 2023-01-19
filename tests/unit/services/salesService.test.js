const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");
const { getAll,insertSale,findById} = require("../../../src/services/salesService");
const { sale, newSale, newSaleHappy, saleProducts } = require("./mocks/salesService.mock");

describe('Verificando service para sales ', function () {
  //arrange recuperando toda lista e inserindo um nome
  beforeEach(function () {
    sinon.stub(salesModel, 'getAll')
      .resolves(sale); //mockar o retorno
   
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
     it("verifica se é possível encontrar novo produto específico", async function () {
    //arrange e importar mocks
        sinon.stub(salesModel, "findById").resolves(saleProducts[0]);
    //act
    const result = await findById(saleProducts[0]); 
    //assert
    expect(result).to.deep.equal({
      sale: {
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
         quantity: 2,
       }
    });
  });     
    it("verifica listagem do produtos específicos em caso de erro", async function () {
    //arrange
    sinon.stub(salesModel, "findById").resolves([]);
    //act
    const result = await findById({type: 404, message: 'Sale not found'});
    //assert
    expect(result.type).to.equal(404);
    expect(result.message).to.equal("Sale not found");
   });  
   afterEach(sinon.restore);
})