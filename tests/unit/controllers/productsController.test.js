const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { product, newProduct } = require('./mocks/productsController.mock');

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
      sinon.stub(productsService, "getAll").resolves(product);

      // act
      await productsController.getAll(req, res);

      //assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithExactly(product);
    });

      it("verifica retorno de lista por buscar por id em caso de sucesso", async function () {
      //arrange
       
     const req = {
        params: { id: 1 },
      };
      sinon.stub(productsService, 'findById').resolves({ type:null, product })//mockar retorno service
      //act
      await productsController.findById(req, res);
      //assert
       expect(res.status).to.have.been.calledWith(200); //mockar retorno controller
      expect(res.json).to.have.been.calledWithExactly(product);
    });  

    it("verifica retorno 404 com menssagem 'Product not found' ", async function () {
      // arrange
      req.params = { id: 5 };

      sinon
        .stub(productsService, "findById")
        .resolves({ type: 404, message: "Product not found" });
      //act
      await productsController.findById(req, res);
      //assert
      expect(res.status).to.have.been.calledOnceWith(404);
      expect(res.json).to.have.been.calledWithExactly({
        message: "Product not found",
      });
    });
    it("verifica cadastro de novo produto com sucesso", async function () {
      //arrange
      req.body = { name: "Escudo Capitão América" };
      sinon.stub(productsService, "insertProduct").resolves(newProduct);
      //act
      await productsController.insertProduct(req, res);
      //assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(newProduct);
    });
    it("retorna erro ao enviar nome com menos de 5 caracteres", async function () {
      //arrange -----reavaliar teste
      req.body = { name: "Dee" };
      sinon.stub(productsService, "insertProduct").resolves({
        type: 422,
        message: '"name" length must be at least 5 characters long',
      });
      //act
      await productsController.insertProduct(req, res);
      //assert
      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWithExactly({
        message: '"name" length must be at least 5 characters long',
      });
    });
  });
});   
