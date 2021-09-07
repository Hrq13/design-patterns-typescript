import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { Vehicle } from '../vehicle/vehicle';
import { CreateVehicleCustomer } from './customer-vehicle-factory';

export class CreateEnterpriseCustomerVehicle implements CreateVehicleCustomer {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const newCustomer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, newCustomer);
  }
}
