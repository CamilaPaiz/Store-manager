const connection = require('./connection');

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return result;
}; 

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales_products ORDER BY sale_id,product_id ;';
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