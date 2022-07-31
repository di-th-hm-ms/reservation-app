const express = require('express');
const router = express.Router();
const ProductDAO = require('../model/productDAO'); // ProductDAO class
const productDAO = new ProductDAO();

const setDb = _ => {
  productDAO.useDB("reservationdb");
  productDAO.createTable();
}

// any routes can exe this middleware
router.use((req, res, next) => {
  console.log((new Date()).toISOString());
  next();
});

// if the route matches ''
router.get('', (req, res) => {
  // -- DB setting
  setDb();

  // DB初期化処理
  productDAO.initDB().then(async _ => {
    const result = await productDAO.selectAll();
    res.json(result);
  });
});

// featured ID
router.get('/:productId', (req, res) => {
  // -- DB setting
  setDb();

  const productId = req.params.productId;

  // DB初期化処理
  productDAO.initDB().then(async _ => {
    const result = await productDAO.selectById(productId);
    console.log("aaa");
    console.log(result);
    if (result) res.json(result);
    else res.status(422).send({title: "Product Error", detail: "Product not found"})
  });
});

module.exports = router;
