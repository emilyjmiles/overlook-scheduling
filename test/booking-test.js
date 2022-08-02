import chai from 'chai';
import Booking from '../src/classes/Booking';
import bookingData from '../src/data/bookingData';
const expect = chai.expect;

describe('Booking Class', () => {
  // Global Variables:
  let booking;

  beforeEach( () => {
    booking = new Booking(bookingData)
  })

  it('should be a function', () => {
 
    expect(Booking).to.be.a('function');
  });

  it('should be an istance of Room', () => {
 
    expect(booking).to.be.an.instanceOf(Booking);
  });
});