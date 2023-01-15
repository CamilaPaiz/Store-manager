const { internal } = require('@hapi/boom');
const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const { getAll, findById } = require('../../../src/services/productsService');
const { products, invalidId, idNotFound } = require('./mocks/productsService.mock');

describe('Verificando service para products', function () {
  it('verifica listagem do produtos', async function () {
    //arrange
    sinon.stub(productsModel, 'getAll').resolves(products)
    //act
    const result = await getAll();
    //expect
    expect(result).to.deep.equal(products);
    
  })
  it("verifica listagem do produtos por id", async function () {
    //arrange
    sinon.stub(productsModel, 'findById').resolves(undefined);
    //act
    const result = await findById(idNotFound);
    //expect
    expect(result.type).to.equal(404);
    expect(result.message).to.equal('Product not found');
  });
  afterEach(sinon.restore);
});