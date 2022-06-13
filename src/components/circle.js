// import using require
const shape = require("Shape");

// declare class
class Circle extends shape {
    drawShape = function() {

    }
    calculateArea = function(side) {
        return (Math.PI * (side * side));
    }
}


// export class using module.exports
module.exports(Circle);