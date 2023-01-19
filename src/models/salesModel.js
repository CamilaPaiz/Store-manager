const connection = require('./connection');

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date,p.product_id,p.quantity
 FROM sales AS s
 INNER JOIN sales_products AS p
 ON s.id = p.sale_id
 WHERE id =?`,
    [id],
  );
  console.log(result);
  return result;
}; 

const getAll = async () => {
  const query = `SELECT s.id AS sale_id, 
   s.date, p.product_id,
   p.quantity FROM sales AS s INNER JOIN sales_products AS p ON s.id = p.sale_id`;
  const [sales] = await connection.execute(query);
  return sales;
};

const insertSales = async (newSale) => {
  const [{ insertId }] = await connection.execute('INSERT INTO StoreManager.sales (date) VALUE (?)',
  [newSale.date]);
   // retorno insertId assim como service
  return { id: insertId, date: newSale.date };
};

module.exports = {
  findById,
  getAll,
  insertSales,
};