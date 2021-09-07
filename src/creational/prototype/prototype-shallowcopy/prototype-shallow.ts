export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Prototype {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('av brasil', 15);
const person1 = new Person('henrique miranda', 21);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'bla bla blas';

console.log(person2);
person2.name = 'Joana';
console.log(person2);
console.log(person2.addresses);
