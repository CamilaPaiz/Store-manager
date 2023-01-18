const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

 const salesService = require('../../../src/services/salesService'); 
const salesController = require('../../../src/controllers/salesController');
const { sale } = require('./mocks/saleController.mock');

describe('verifica camada controller de sales Products ', function () {
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
      sinon.stub(salesService, "getAll").resolves(sale);

      // act
      await salesController.getAll(req, res);

      //assert
      
      expect(res.json).to.have.been.calledWithExactly(sale);
    });
   /*  it("verifica cadastro de nova venda com sucesso", async function () {
      //arrange
      req.body = sale;
      sinon.stub(salesService, "insertSale").resolves(sale);
      //act
      await salesController.insertSales(req, res);
      //assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithExactly(sale);
    }); */
  });
});