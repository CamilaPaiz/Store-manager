const { expect } = require('chai');
const { create } = require('frisby');
const sinon = require('sinon');
const  { productsModel }  = require('../../../src/models');
const { getAll, findById, insertProduct } = require('../../../src/services/productsService');
const { products, idNotFound, newProduct } = require('./mocks/productsService.mock');

describe('Verificando service para products', function () {
  //arrange recuperando toda lista e inserindo um nome
  beforeEach(function () {
    sinon.stub(productsModel, 'getAll')
      .resolves(products); //mockar o retorno
    sinon
      .stub(productsModel, 'insertProduct')
      .resolves({insertId:2});
  });
  afterEach(function () {
    sinon.restore();
  });
  it("verifica listagem do produtos", async function () {
    //act
    const result = await getAll();
    //assert
    expect(result).to.deep.equal(products);
  });
  it("verifica listagem do produtos por id em caso de erro", async function () {
    //arrange
    sinon.stub(productsModel, "findById").resolves(undefined);
    //act
    const result = await findById(idNotFound);
    //assert
    expect(result.type).to.equal(404);
    expect(result.message).to.equal("Product not found");
  });
  it("verifica listagem do produtos por id em caso de sucesso", async function () {
    //arrange--->retornar teste para outro caso de assert
    sinon.stub(productsModel, "findById").resolves(products[0]);
    //act
    const result = await findById(1);
    //assert
    expect(result.type).to.equal(null);
    
  });

    it('verifica se é possível cadastrar novo produto', async function () {
    //arrange

    //act 
    const result = await insertProduct({name:'Escudo Capitão América'})
    //assert
     expect(result).to.deep.equal(newProduct); 
  })   
  it("verifica retorno de erro ao inserir name com menos de 5 caracteres", async function () {
    //act 
    const result = await insertProduct({ name: "de" });
    //assert
    expect(result.type).to.equal(422);
    expect(result.message).to.deep.equal(
      '"name" length must be at least 5 characters long'
    );
  });
  
  afterEach(sinon.restore);
});