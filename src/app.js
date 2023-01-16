const express = require('express');
const { productsController } = require('./controllers');
/* const { productsRouter } = require('./routers'); */

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

/* app.use('/products', productsRouter); */
app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.findById);
app.post('/products', productsController.insertProduct);

module.exports = app;