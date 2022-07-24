export class Product {
  private _name: string;
  private _price: number;
  private _description: string;

  constructor(name: string = "ProductName", price: number = 100, description: string = "No description") {
    this._name = name;
    this._price = price;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }
  get description(): string {
    return this._description;
  }

  set description(newDesc: string) {
    this._description = newDesc;
  }
}
