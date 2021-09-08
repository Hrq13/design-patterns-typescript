export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  constructor(public readonly value?: unknown) {
    super();
  }

  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateNumber extends ValidationComponent {
  constructor(public readonly value?: unknown) {
    super();
  }

  validate(value: unknown): boolean {
    if (typeof value === 'number') return true;
    else if (typeof value === 'string') return /\d/.test(value);
    return false;
  }
}

export class ValidateString extends ValidationComponent {
  constructor(public readonly value?: unknown) {
    super();
  }

  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    return this.children.every((child) => child.validate(value));
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }

  remove(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => {
      const index = this.children.indexOf(validation);
      if (index !== -1) this.children.splice(index, 1);
    });
  }
}

const email = 'henrique13@gmail.com';
const email2 = 'Not a email';

const validationComposite = new ValidationComposite();
const emailValidation = new ValidateEmail();
const stringValidation = new ValidateString();
const numberValidation = new ValidateNumber();

validationComposite.add(stringValidation, numberValidation, emailValidation);

console.log(validationComposite.validate(email));
console.log(validationComposite.validate(email2));
