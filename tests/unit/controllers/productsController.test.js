const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { product } = require('./mocks/productsController.mock');




describe('verifica camada controller de produts', function () {
  describe("listando products", function () {
    //arrange
    const req = {};
    const res = {};

    beforeEach(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });
    afterEach(() => {
      sinon.restore();
    });

    it("verifica retorno status 200 e lista em caso de sucesso", async function () {
      //arrange
      sinon.stub(productsService, 'getAll').resolves(product);

      // act
      await productsController.getAll(req, res);

      //assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(product);
    });

    it("verifica retorno de lista por buscar por id em caso de sucesso", async function () {
      //arrange
      req.params = { id: 1 };
      sinon.stub(productsService, 'findById').resolves([product[0]]);

      //act
      await productsController.findById(req, res);
      //assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly([product[0]]);
    });

    it("verifica retorno 404 com menssagem 'Product not found' ", async function () {
      // arrange
      req.params = { id: 5 };
     
      sinon
        .stub(productsService, 'findById')
        .resolves({ type: 404, message: 'Product not found'});
      //act
      await productsController.findById(req, res);
      //assert
      expect(res.status).to.have.been.calledOnceWith(404);
      expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' });
    });
  });
});   
