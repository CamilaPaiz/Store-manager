const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");

const connection = require('../../../src/models/connection');
const { newSale, sale} = require('./mocks/salesService.mock');

describe('Testes de unidade do model de sales', function () {
  it("Recuperando a lista de produtos", async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([sale]);
    //act
    const result = await salesModel.getAll();
    //assert
    expect(result).to.be.deep.equal(sale);
  });
  /*  it("Recuperando a lista de sales por id", async function () {
     //arrange
     sinon.stub(connection, "execute").resolves([[sale[0]]]);
     //act
     const result = await salesModel.findById(1);
     //assert
     expect(result).to.be.deep.equal(sale[0]);
   });
   it("verificando cadastro de nova sale com sucesso", async function () {
     //arrange
     sinon.stub(connection, "execute").resolves([newSale]);
     //act
     const result = await salesModel.insertSales(newSale);
     //assert
     expect(result).to.equal(newSale);
   }); */
  afterEach(sinon.restore);
})