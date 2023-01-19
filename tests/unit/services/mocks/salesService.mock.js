const newSale = 
  {
    id: 1,
    date:2023 - 01 - 17,
  }
  
const newSaleHappy = [
  {
    date: 2023-01-17,
    productId: 1,
    quantity: 2,
  },
];

const newSaleItem = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];
const saleWihtoutProductId = [
  {
   
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];
const newSaleItemHappy = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};
const sale = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },

  
];
const saleProducts = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },

  
];
const dateSale = {
  date: "2021-09-09T04:54:29.000Z",
};

const happyInsertsaleProduct = [
  {
    saleId:1,
    productId: 1,
    quantity: 1,
  },
  {
    saleId:1,
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  newSale,
  newSaleItem,
  sale,
  dateSale,
  saleProducts,
  newSaleItemHappy,
  saleWihtoutProductId,
  newSaleHappy,
  happyInsertsaleProduct,
};