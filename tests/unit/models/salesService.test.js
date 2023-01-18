const { expect } = require("chai");
const sinon = require("sinon");
const { salesModel } = require("../../../src/models");

const connection = require('../../../src/models/connection');
const { newSale} = require('./mocks/salesService.mock');

describe('Testes de unidade do model de sales', function () {
  it("Recuperando a lista de produtos", async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([newSale]);
    //act
    const result = await salesModel.getAll();
    //assert
    expect(result).to.be.deep.equal(newSale);
  });
})