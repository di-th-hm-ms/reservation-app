// to become easy to insert, update
module.exports = class Product {
  _id;
  _name;
  _price;
  _description;
  _titles;
  _bodies;
  _coverImgPath;

  constructor(id = 0, name = "ProductName", price = 100, description = "No description",
              titles=[], bodies=[], coverImgPath="") {

    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
    this._titles = titles;
    this._bodies = bodies;
    this._coverImgPath = coverImgPath;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  get description() {
    return this._description;
  }
  set description(newDesc) {
    this._description = newDesc;
  }

  get titles() {
    return this._titles;
  }
  // set titles(title, index) {
  //   this._titles[index] = title;
  // }

  get bodies() {
    return this._bodies;
  }
  // set bodies(body, index) {
  //   this.bodies[index] = title;
  // }

  get coverImgPath() {
    return this._coverImgPath;
  }
  set coverImgPath(newCoverImgPath) {
    this._coverImgPath = newCoverImgPath;
  }
}
