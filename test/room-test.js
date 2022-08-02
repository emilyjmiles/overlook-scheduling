import chai from 'chai';
import Room from '../src/classes/Room';
import roomData from '../src/data/roomData';
const expect = chai.expect;

describe('Room Class', () => {
  // Global Variables:
  let room;

  beforeEach( () => {
    room = new Room(roomData)
  })

  it('should be a function', () => {
 
    expect(Room).to.be.a('function');
  });

  it('should be an istance of Room', () => {
 
    expect(room).to.be.an.instanceOf(Room);
  });
});