// let myName = 'bhanu prakash reddy';
// console.log(myName);
// alert(myName);
// let company;
// company = 'testyentra';
// company = 23;
// console.log(company);
// console.log(myName);
// let sample : number | boolean;
// sample = 10;
// // sample = true;//true is not assignable type to number and string
// let myArray : string[] = ['sjdak','asuhdfluhlkj'];//we csn initilize only string type in the array
// console.log(myArray);
// let myTuple: [string, number, boolean] = ['bhanu', 234,true];//we have to pass data in same order
// enum colors{
//     red = 'danger',
//     black = 'legendary', 
//     green ='success',
//     blue = 'good'
// }
// console.log(colors);
// class Person{
//     // name : string;
//     // age : number;
//     constructor(public personName:string,public personAge:number){
//         // this.name = personName;
//         // this.age = personAge;
//     }
// }
// let person = new Person('bhanu',21);
// console.log(person.personName);
// class Car{
//     constructor(public brand:string,public model:string){
//     }
// }
// let bmwCar = new Car('BMW','x5');
// console.log(bmwCar.brand);//non static members calls by using object refrance
// console.log(bmwCar.model);//static members called by using class name
// let benzCar: Car = {
//     brand : 'benz',
//     model :'0002'
// }
// class Person {
//     constructor(public name:string,public age:number,public salary:number){
//     }
// }
// class Student extends Person{
//     constructor (public myName:string,public myAge:number,public usn:number){
//         super(myName,myAge,usn);
//     }
// }
// let person = new Person('donga',23,1234);
// let student = new Student('bhanu',21,12345555);
// console.log(student.salary);
// class Person {
//     constructor(public name:string,public age:number,public degree ?:string){
//     }
// }
// let person1:Person = {
//     name :'bhanu',
//     age :21
//     degree :'btech'//optional 
// }
// interface Student{
//     name:string;
//     age:number;
//     printDetails():void;
// }
// class Person implements Student{
//     name='bhanu';
//     age=21;
//     printDetails(){
//         console.log('student name is '+this.name);
//         console.log('student age is '+this .age);
//     }
// }
// let person1 =new Person();
// person1.printDetails();
// let student1:Student= {
//     name:'bhanpe',
//     age:21,
//     printDetails:() => {
//         console.log('student name is '+student1.name);
//         console.log('student age is '+student1 .age);
//     }
// }
// function getArray<p>(items:[]){
//     return new Array<p>().concat(items)
// }
// let strArray =  getArray<string>(['sdfdsf','sdfazssadf','asdfad']);
