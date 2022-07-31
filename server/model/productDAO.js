// const Product = require('./product');
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
  createTable = async _ => {
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
      await this.dropTable();
      await this.createTable();
      mockProducts.forEach(newProduct => {
        // const product = new Product(newProduct.name, newProduct.price, newProduct.description,
        //                             newProduct.titles, newProduct.bodies, newProduct.coverImgPath);
        const sql = "INSERT INTO products set ?";
        this.conn.query(sql, { name: newProduct.name, price: newProduct.price, description: newProduct.description,
                          title1: newProduct.titles[0], title2: newProduct.titles[1], title3: newProduct.titles[2],
                          body1: newProduct.bodies[0], body2: newProduct.bodies[1], body3: newProduct.bodies[2],
                          coverImgPath: newProduct.coverImgPath }, (error, result) => {
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
  // ID resetをかけるため。
  dropTable = _ => {
    return new Promise((resolve, reject) => {
      this.conn.query("DROP TABLE IF EXISTS products", (error, result) => {
        if (error) reject(error);
        console.log(result);
        resolve();
      });
    })
  };

  // 全データ表示
  selectAll = _ => {
    return new Promise((resolve, reject) => {
      this.conn.query("SELECT * FROM products", (error, result) => {
        if (error) reject(error);
        console.log(result);
        resolve(result);
      });
    });
  };

  // IDで取得
  selectById = id => {
    return new Promise((resolve, reject) => {
      this.conn.query("SELECT * FROM products WHERE id = ?", [id], (error, result) => {
        if (error) reject(error);
        console.log("bbb");
        console.log(result);
        resolve(result);
      });
    });
  };
};
