export class Car {
  constructor(
    public id: number,
    public name: string,
    public manufacturer: string,
    public color: string,
    public qty: number,
    public price: number
  ) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.color = color;
    this.qty = qty;
    this.price = price;
  }
}
