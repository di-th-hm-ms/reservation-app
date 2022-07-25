export class Product {
  private _name: string;
  private _price: number;
  private _description: string;
  private _titles: string[];
  private _bodies: string[];
  private _coverImgPath: string;

  constructor(name: string = "ProductName", price: number = 100, description: string = "No description",
              titles: string[]=[], bodies: string[]=[], coverImgPath: string="") {
    this._name = name;
    this._price = price;
    this._description = description;
    this._titles = titles;
    this._bodies = bodies;
    this._coverImgPath = coverImgPath;
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

  get titles(): string[] {
    return this._titles;
  }
  // set titles(title: string, index: number) {
  //   this._titles[index] = title;
  // }

  get bodies(): string[] {
    return this._bodies;
  }
  // set bodies(body: string, index: number) {
  //   this.bodies[index] = title;
  // }

  get coverImgPath(): string {
    return this._coverImgPath;
  }
  set coverImgPath(newCoverImgPath: string) {
    this._coverImgPath = newCoverImgPath;
  }
}
