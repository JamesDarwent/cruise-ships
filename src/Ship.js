

class Ship{
    constructor(port) {
        this.startingPort = port;
        this.currentPort = port;
    };

    setSail() {
        this.startingPort = 0;
    };

    dock(port) {
        this.currentPort = port;
    };
};







module.exports = Ship;