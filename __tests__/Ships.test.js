
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe("Ship", () => {

    let ship, port;

    beforeEach(() => {
        port = new Port("Dover")
        ship = new Ship(port);
    });

    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        expect(ship.startingPort).toBe(port);
    });

    it("Allows the ship to set sail", () => {

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
    });
});

