// import using require
const Shape = require("Shape");

// declare class
class Circle extends Shape {
    calculateArea = function(side) {
        return (Math.PI * (side * side));
    }
}


// export class using module.exports
module.exports = Circle;