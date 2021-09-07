import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bycicleFactory = new BicycleFactory();
  const bicycle = bycicleFactory.getVehicle('Bicycle');
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Uno');
  const car3 = carFactory.getVehicle('Sandero');
  const cars = [car1, car2, car3, bicycle];
  const randomIndex = randomNumbers(cars.length);
  return cars[randomIndex];
}
