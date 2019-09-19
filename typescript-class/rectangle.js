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
