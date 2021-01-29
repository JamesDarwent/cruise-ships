/* globals descrive it expect */
const Ship = require('../src/Ship.js');

describe("Ship", () => {
    it("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        const ship = new Ship("Dover");

        expect(ship.startingPort).toBe("Dover");
    });
});


describe("setSail", () => {
    const ship = new Ship("Dover");

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
});