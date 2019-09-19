namespace Mathoperations {
    const PI = 3.24;
    export function circumferanceOfCircle(radius:number){
        console.log("circumferanceOfCircle is "+2*PI*radius);
    }
    export function areaOfCircle(r:number){
        console.log('area of circle is '+PI*r*r)
    }
}
Mathoperations.circumferanceOfCircle(2);
Mathoperations.areaOfCircle(123);