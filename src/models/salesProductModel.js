const connection = require('./connection');
/* const salesModel = require('./salesModel'); */

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products ORDER BY id';
  const [sales] = await connection.execute(query);
  return sales;
};
// sale_id vem da tabela sales e productId de sale_products
const insertSales = async (newSale) => { 
    const [sales] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id,product_id,quantity) VALUES(?,?,?)',
      [newSale.saleId, newSale.productId, newSale.quantity], // id da venda vem da query a inserir venda e do produto ao inserir o produto na lista
    );
  return sales;
  };
 
module.exports = {
  insertSales,
  getAll,
};