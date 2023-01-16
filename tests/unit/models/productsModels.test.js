const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { products, newProduct, name }  = require('./mocks/productsModel.mock');

describe('Testes de unidade do model de produtos', function () {
  it("Recuperando a lista de produtos", async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([products]);
    //act
    const result = await productsModel.getAll();
    //assert
    expect(result).to.be.deep.equal(products);
  });

  it("Recuperando a lista de produtos por id", async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    //act
    const result = await productsModel.findById(1);
    //assert
    expect(result).to.be.deep.equal(products[0]);
    
  });
  it('verificando cadastro de novo produto com sucesso', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([newProduct]);
    //act
    const result = await productsModel.insertProduct(name);
    //assert
    expect(result).to.equal(newProduct)
  })
  
  afterEach(sinon.restore); // para liberar o stub
})