const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

 const salesProductService = require('../../../src/services/salesProductService'); 
const salesProductController = require('../../../src/controllers/salesProductController');
const { newSale } = require('./mocks/salesProductController.mock');

describe('verifica camada controller de sales Products', function () {
  describe("listando sales", function () {
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
  
    it("verifica retorno status 201 e lista o que foi cadastrado nas vendas em caso de sucesso", async function () {
      //arrange
      sinon.stub(salesProductService, "getAll").resolves(newSale);

      // act
      await salesProductController.getAll(req, res);

      //assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(newSale);
    });
    it("verifica cadastro de nova venda com sucesso", async function () {
      //arrange
      req.body = newSale;
      sinon.stub(salesProductService, "insertSales").resolves(newSale);
      //act
      await salesProductController.insertSales(req, res);
      //assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(newSale);
    });
  });
});