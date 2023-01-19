const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

 const salesService = require('../../../src/services/salesService'); 
const salesController = require('../../../src/controllers/salesController');
const { sale,happyReq, happyRes } = require('./mocks/saleController.mock');

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
     /* it("verifica cadastro de nova venda com sucesso", async function () {
      //arrange
     req.params = { id: 1 };
      sinon.stub(salesService, "findById").resolves(happyReq);
      //act
      await salesController.findById(req, res);
      //assert
      
      expect(res.json).to.have.been.calledWithExactly(happyRes);
    });  */
    /*  it("verifica retorno de lista por buscar por id em caso de sucesso", async function () {
       //arrange

       const req = {
         params: { id: 1 },
       };
       sinon
         .stub(salesService, "findById")
         .resolves({ type: null, newSale }); //mockar retorno service
       //act
       await salesController.findById(req, res);
       //assert
       expect(res.status).to.have.been.calledWith(200); //mockar retorno controller
       expect(res.json).to.have.been.calledWithExactly(newSale);
     });  */
     it("verifica retorno 404 com menssagem 'Product not found' ", async function () {
       // arrange
       req.params = { id: 10 };

       sinon
         .stub(salesService, "findById")
         .resolves({ type: 404, message: "Sale not found" });
       //act
       await salesController.findById(req, res);
       //assert
       expect(res.status).to.have.been.calledOnceWith(404);
       expect(res.json).to.have.been.calledWithExactly({
         message: "Sale not found",
       });
     }); 
  });
});