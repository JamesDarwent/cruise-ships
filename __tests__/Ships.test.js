
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe("Ship", () => {

    let ship, dover, helsinki;

    beforeEach(() => {
        dover = new Port("Dover")
        helsinki = new Port("Helsinki")
        ship = new Ship(dover);
    });

    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        expect(ship.startingPort).toBe(dover);
    });

    it("can sail to another port", () => {

        ship.setSail();

    expect(ship.startingPort).toBeFalsy();
    });

    it("can dock at a port", () => {

        ship.setSail();
        ship.dock(helsinki);

    expect(ship.currentPort).toBe(helsinki);
    });
});

