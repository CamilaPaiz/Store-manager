const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id';
  const [products] = await connection.execute(query);
  return products;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ',
    [id],
  );
  return result;
};

const insertProduct = async (name) => {
  const [newProduct] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
   // console.log(newProduct); // retorno insertId assim como service
  return newProduct;
};

const updateProduct = async (name, id) => {
  const [updateName] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
 
  return updateName;
};
module.exports = {
  getAll,
  findById,
  insertProduct,
  updateProduct,
 
};