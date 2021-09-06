import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
mainDishBuilder.makeBeverage().makeBeverage().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal().makeMeal().getMeal();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
