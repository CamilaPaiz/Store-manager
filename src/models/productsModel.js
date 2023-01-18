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
   console.log(newProduct); // retorno insertId assim como service
  return newProduct;
};

// sale_id vem da tabela sales e productId de sale_products

/* const insertSales = async (newSale) => { 
  // inserindo a venda na tabela sale para recuperar o id 
  const [insertSale] = await connection
    .execute('INSERT INTO StoreManager.sales () VALUES ()');
  // inserir no sales_products
  const registerSale = newSale.map(async (item) => { // map do array contendo as vendas(newSale) p add +1
    const [sales] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id,product_id,quantity) VALUES(?,?,?)',
      [insertSale.insertId, item.productId, item.quantity], // id da venda vem da query a inserir venda e do produto ao inserir o produto na lista
    );
    // console.log(registerSale);  // retorna 2 promises
    
    return sales; // item inserido
  });
  return registerSale; // itens do array inserido
}; 
 */
module.exports = {
  getAll,
  findById,
  insertProduct,
 /*  insertSales,  */
};