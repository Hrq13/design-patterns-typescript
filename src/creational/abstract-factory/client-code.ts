import { CreateEnterpriseCustomerVehicle } from './factories/enterprise-customer-vehicle-factory';
import { CreateIndividualCustomerVehicle } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new CreateEnterpriseCustomerVehicle();
const individualFactory = new CreateIndividualCustomerVehicle();

const entCarVehicle = enterpriseFactory.createVehicle('BMW X5', 'Sr. Henrique');
entCarVehicle.pickUp();

const indCarVehicle = individualFactory.createVehicle('Gol quadrado', 'Careca');
indCarVehicle.pickUp();
