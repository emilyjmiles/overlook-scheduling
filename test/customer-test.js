import chai from 'chai';
import Customer from '../src/classes/Customer';
import customerData from '../src/data/customerData';
const expect = chai.expect;

describe('Customer Class', () => {
  // Global Variables:
  let customer;

  beforeEach( () => {
    customer = new Customer(customerData)
  })

  it('should be a function', () => {
 
    expect(Customer).to.be.a('function');
  });

  it('should be an istance of Room', () => {
 
    expect(customer).to.be.an.instanceOf(Customer);
  });
});