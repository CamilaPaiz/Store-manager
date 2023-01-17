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
 /*  console.log(newProduct); */ // retorno insertId
  return newProduct;
};

 /* const insertSales = async (newSale) => { // teria que colocar [{insertId}]?
  const registerSale = newSale.map(async (item) => { // map do array contendo as vendas(newSale) p add +1
    const [sales] = await connection.execute( // query pra inserir em sales e sales_proucts?
      'INSERT INTO StoreManager.sales_products (product_id, quantity) VALUES(?,?)', // id é auto increment?
      [item.productId, item.quantity],
    );
    console.log(registerSale);
    
    return sales; // item unico
  });
  return registerSale; // itens do array
}; 
insertSales([
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
]);
 */
module.exports = {
  getAll,
  findById,
  insertProduct,
 /*  insertSales, */
};