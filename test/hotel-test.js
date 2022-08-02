import chai from 'chai';
import Hotel from '../src/classes/Hotel';
const expect = chai.expect;

describe('Hotel Class', () => {
  // Global Variables:
  let hotel;

  beforeEach( () => {
    hotel = new Hotel()
  })

  it('should be a function', () => {
 
    expect(Hotel).to.be.a('function');
  });

  it('should be an istance of Room', () => {
 
    expect(hotel).to.be.an.instanceOf(Hotel);
  });
});