const { expect } = require("chai");
const sinon = require("sinon");
const { salesProductModel, salesModel } = require("../../../src/models");

const connection = require("../../../src/models/connection");
const { saleProduct} = require("./mocks/salesService.mock");

describe("Testes de unidade do model de salesProducts", function () {
  it("Recuperando a lista de produtos", async function () {
    //arrange
    sinon.stub(connection, "execute").resolves([saleProduct]);
    //act
    
    const result = await salesProductModel.getAll();
    //assert
    expect(result).to.be.deep.equal(saleProduct);
  });
   afterEach(sinon.restore); 
});
