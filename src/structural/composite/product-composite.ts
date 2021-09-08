export abstract class ProductComponent {
  abstract getPrice(): number;
  abstract getAmount(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }

  getAmount(): number {
    return 1;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((total, child) => total + child.getPrice(), 0);
  }

  getAmount(): number {
    return this.children.reduce((sum, child) => sum + child.getAmount(), 0);
  }
}

const galaxy1 = new ProductLeaf('Galaxy 1', 260);
const iPhoneX = new ProductLeaf('iPhone X', 790);
const iPhoneXS = new ProductLeaf('iPhone XS', 850);
const mi11 = new ProductLeaf('Mi 11', 400);

const rice = new ProductLeaf('Rice bag', 20);
const bean = new ProductLeaf('Bean bag', 15);
const salad = new ProductLeaf('Salad', 5);
const fruits = new ProductLeaf('Fruits', 13);

const tShirt = new ProductLeaf('T-Shirt', 15);
const skirt = new ProductLeaf('Skirt', 35);
const gloves = new ProductLeaf('gloves', 8);

const phoneBox = new ProductComposed();
const foodBox = new ProductComposed();
const clothingBox = new ProductComposed();
const masterBox = new ProductComposed();

phoneBox.add(galaxy1, iPhoneX, iPhoneXS, mi11);
foodBox.add(rice, bean, salad, fruits);
clothingBox.add(tShirt, skirt, gloves);
masterBox.add(phoneBox, foodBox, clothingBox);

console.log(
  `Phone box: ${phoneBox.getPrice()}  | Total quantity: ${phoneBox.getAmount()}`,
);
console.log(
  `Food box: ${foodBox.getPrice()}     | Total quantity: ${foodBox.getAmount()}`,
);
console.log(
  `Clothing box: ${clothingBox.getPrice()} | Total quantity: ${clothingBox.getAmount()}`,
);
console.log(
  `Master box: ${masterBox.getPrice()} | Total quantity: ${masterBox.getAmount()}`,
);
console.log(masterBox);
