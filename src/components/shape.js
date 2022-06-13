// declare class
class Shape {
    constructor() {
        let color = "red";
        drawShape = function() {

        }
        calculateArea = function(side) {
            return side*side;
        }
    }
}
// export class using module.exports
module.exports(Shape);