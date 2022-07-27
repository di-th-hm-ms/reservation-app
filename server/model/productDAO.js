const Product = require('./product');
const mockProducts = require('../product-mock');
const config = require('../config/dev'); // develop env

module.exports = class ProuductDAO {
  conn;
  constructor() {
    const mysql = require('mysql2');
    this.conn = mysql.createConnection({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASSWORD
    });
  }

  // DB を指定のものに
  useDB = name => {
    this.conn.query("USE reservationdb", (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  };

  // create table after initDB()
  createTable = _ => {
    const sql = "CREATE TABLE IF NOT EXISTS products(\
      id SERIAL PRIMARY KEY,\
      name VARCHAR(40),\
      price INT,\
      description VARCHAR(400),\
      title1 VARCHAR(30),\
      title2 VARCHAR(30),\
      title3 VARCHAR(30),\
      body1 VARCHAR(400),\
      body2 VARCHAR(400),\
      body3 VARCHAR(400),\
      coverImgPath VARCHAR(400)\
      )";
      this.conn.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
      });
  }

  // DB初期化 before createTable()
  initDB = async _ => {
    try {
      // 既存データ削除
      await this.deleteAll();
      mockProducts.forEach(newProduct => {
        const product = new Product(newProduct.name, newProduct.price, newProduct.description,
                                    newProduct.titles, newProduct.bodies, newProduct.coverImgPath);
        const sql = "INSERT INTO products set ?";
        this.conn.query(sql, { name: product.name, price: product.price, description: product.description,
                          title1: product.titles[0], title2: product.titles[1], title3: product.titles[2],
                          body1: product.bodies[0], body2: product.bodies[1], body3: product.bodies[2],
                          coverImgPath: product.coverImgPath }, (error, result) => {
                            if (error) throw error;
                            console.log(result);
                          });
      });
    }
    catch (e) {
      throw e;
    }
  };

  deleteAll = _ => {
    return new Promise((resolve, reject) => {
      this.conn.query("DELETE FROM products", (error, result) => {
        if (error) reject(error);
        console.log(result);
        resolve();
      });
    })
  };

  // 全データ表示
  selectAll = _ => {
    const sql = "SELECT * FROM products";
    this.conn.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  };
};
