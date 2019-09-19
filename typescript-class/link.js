var Mathoperations;
(function (Mathoperations) {
    var PI = 3.24;
    function circumferanceOfCircle(radius) {
        console.log("circumferanceOfCircle is " + 2 * PI * radius);
    }
    Mathoperations.circumferanceOfCircle = circumferanceOfCircle;
    function areaOfCircle(r) {
        console.log('area of circle is ' + PI * r * r);
    }
    Mathoperations.areaOfCircle = areaOfCircle;
})(Mathoperations || (Mathoperations = {}));
Mathoperations.circumferanceOfCircle(2);
Mathoperations.areaOfCircle(123);
var Mathoperations;
(function (Mathoperations) {
    var rectangle;
    (function (rectangle) {
        function area(length, breadth) {
            console.log('area of rectangle' + length * breadth);
        }
        rectangle.area = area;
    })(rectangle = Mathoperations.rectangle || (Mathoperations.rectangle = {}));
    var pere;
    (function (pere) {
        function peremeter(length, breadth) {
            console.log('area of peremeter' + length * breadth);
        }
        pere.peremeter = peremeter;
    })(pere = Mathoperations.pere || (Mathoperations.pere = {}));
})(Mathoperations || (Mathoperations = {}));
Mathoperations.rectangle.area(2, 2);
Mathoperations.pere.peremeter(23, 23);
///<reference path="./circle.ts"/>
///<reference path="./rectangle.ts"/>
// Mathoperations.circumferanceOfCircle(2);
// Mathoperations.areaOfCircle(123);
