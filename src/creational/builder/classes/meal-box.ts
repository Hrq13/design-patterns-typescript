import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return +this._children
      .reduce((ac, meal) => {
        return meal.getPrice() + ac;
      }, 0)
      .toFixed(2);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }
}
