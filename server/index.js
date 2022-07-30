const express = require('express');
// const config = require('./config/dev'); // develop env
// const Product = require('./model/product');
// const mockProducts = require('./product-mock');
const ProductDAO = require('./model/productDAO'); // ProductDAO class
const productsRouter = require('./routes/products'); // Router instance

const app = express();

// angularからリクエストを受け取って行う

// --

// create endpoints
// angular でいうproducts以降のパスと情報表示の関係
// app.get('/products', (req, res) => {
//   res.json({'success': true});
// });
app.use('/api/v1/products', productsRouter);

const PORT = process.env.PORT || '3001'; // Heroku側の設定==process.env

app.listen(PORT, _ => {
  console.log('I am running');
});

// カラム一覧表示
// sql = "SHOW COLUMNS FROM products FROM reservationdb"; // DBまで指定
// conn.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// })

// CREATE TABLE products
// if (conn.query())
// let sql = "SHOW TABLES LIKE ??";
// const ins = "products";
// sql = mysql.format(sql, ins);
