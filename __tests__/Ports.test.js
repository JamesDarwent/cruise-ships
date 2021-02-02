const Port = require('../src/Port.js');

describe("Port", () => {

    let port;

    beforeEach(() => {
        port = new Port("Dover")
    });

    it("returns an object", () => {
        expect(new Port()).toBeInstanceOf(Port);
    });

    it("checks the port has a name", () => {
        expect(port.name).toBe("Dover");
    });
});



