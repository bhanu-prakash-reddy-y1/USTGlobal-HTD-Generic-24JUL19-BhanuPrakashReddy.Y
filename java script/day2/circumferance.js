var pi=3.14;
function cir(r){
    var circumf = 2*pi*r;
console.log("circuferance of a circle is ="+circumf);
}
cir(10);//naming function
var circ = function(m){
console.log("circuferance of a circle is ="+2*pi*m);
}//ananymus function
circ(10);
(function circum(o){
    console.log("circuferance of a circle is ="+2*pi*o);

}(9));//iife(immediate invoked function expression)
var circuferance = (p) => {
    console.log("circuferance of a circle is ="+2*pi*p);
}
circuferance(10);//fat arrow function