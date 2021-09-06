import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('arroz', 14.99);
    const beans = new Beans('feijao', 3.99);
    this._meal.add(rice, beans);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('whiskey', 21);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('pudding', 5);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
  getPrice(): number {
    return this._meal.getPrice();
  }
}
