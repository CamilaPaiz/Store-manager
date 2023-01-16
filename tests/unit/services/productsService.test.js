const { expect } = require('chai');
const { create } = require('frisby');
const sinon = require('sinon');
const  { productsModel }  = require('../../../src/models');
const { getAll, findById, insertProduct } = require('../../../src/services/productsService');
const { products, idNotFound, newProduct, validName } = require('./mocks/productsService.mock');

describe('Verificando service para products', function () {
  it('verifica listagem do produtos', async function () {
    //arrange
    sinon.stub(productsModel, 'getAll').resolves(products)
    //act
    const result = await getAll();
    //expect
    expect(result).to.deep.equal(products);
    
  })
  it("verifica listagem do produtos por id em caso de erro", async function () {
    //arrange
    sinon.stub(productsModel, 'findById').resolves(undefined);
    //act
    const result = await findById(idNotFound);
    //expect
    expect(result.type).to.equal(404);
    expect(result.message).to.equal('Product not found');
  });
   /* it("verifica listagem do produtos por id em caso de sucesso", async function () {
    //arrange
    sinon.stub(productsModel, 'findById').resolves(products[0]);
    //act
    const result = await findById(1);
    //expect
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(products)[0];
  });  */

  /* it('verifica se é possível cadastrar novo produto', async function () {
    //arrange
     
     sinon.stub(productsModel, 'insertProduct').resolves({ name:'Escudo Capitão América' }); 
    sinon.stub(productsModel, 'findById').resolves([newProduct[1]]);
    //act 
    const result = await insertProduct({validName})
    //assert
    expect(result).to.deep.equal({ id: 2, name: 'Escudo Capitão América' });
  }) */
  afterEach(sinon.restore);
});