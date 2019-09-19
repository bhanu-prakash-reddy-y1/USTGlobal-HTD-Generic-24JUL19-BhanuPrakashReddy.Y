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
