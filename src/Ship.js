// const starting_port = "Dover"


function Ship(port) {
this.startingPort = port;
};

Ship.prototype = {

    setSail() {
        this.startingPort = 0;
    },
};








module.exports = Ship