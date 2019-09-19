var message='hello';
console.log(message);
message=message+'world';
console.log(message);
var message1=message;
console.log(message1);
message1='hi';
console.log(message1);
console.log("===================");
var person={
    name:'samantha',
    age:30,
    color:'white'
}
console.log(person);
person.name='kajal';
console.log(person);
var person1=person;
person1.name='rajni';
console.log(person);
console.log(person1);
function first(callBack){
    setTimeout(function()
    {
        console.log('first')
        callBack();
    },10000);
    console.log('this is first')
}
function second(){
    console.log('second');
}
first(second);
console.log('==============================');
