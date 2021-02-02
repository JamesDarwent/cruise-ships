
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe("Ship", () => {

    let ship, port;

    beforeEach(() => {
        ship = new Ship(port);
    });

    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        expect(ship.currentPort).toBe(port);
    });

    it("Allows the ship to set sail", () => {

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
    });
});

