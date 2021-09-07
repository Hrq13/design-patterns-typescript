import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomer } from './customer-vehicle-factory';

export class CreateIndividualCustomerVehicle implements CreateVehicleCustomer {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const newCustomer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, newCustomer);
  }
}
