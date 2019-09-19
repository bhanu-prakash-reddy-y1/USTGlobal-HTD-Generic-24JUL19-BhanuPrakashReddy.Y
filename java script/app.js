var todaysDate=new Date();
var day=todaysDate.getMonth()
var months=['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
var days=['sat','mon','thes','wed','thur','fri','sat']
console.log("month ="+months[todaysDate.getMonth()])
console.log("day ="+days[day])
var date=new Date(2019,7,26,34,33,30,0);
console.log(date)
var date1=new Date(0);
console.log(date1)
var date2=new Date("october 10,2018 11,13:1:00");
console.log(date2)
console.log(Math.PI);
console.log(Math.floor(4.6))
console.log(Math.ceil(4.5))
console.log(Math.round(4.2))
console.log(Math.round(4.6))
console.log(Math.floor(Math.random()*100));
console.log(Math.round(Math.random()*100));
console.log('---------------------------------')
var numberValue = 10;
var numberValue1 = '10';
if(numberValue===numberValue1){
    console.log('Equal');
}else{
    console.log('Not Equal');
}
console.log('==================================')
console.log(typeof numberValue);
console.log(typeof numberValue1);
console.log(typeof months)
var num2=null;
console.log(typeof num2);
var num1;
console.log(typeof num1);
var BooleanValue = true;
console.log(typeof BooleanValue)
console.log(typeof Boolean);
console.log('==================================')
var age=21;
if(age>=18){
    console.log('adult')
}else{
    console.log('child')
}
console.log(age>=18 ? 'adult' : 'child')
console.log("===========================")
var emp=[
    {
        name:'ranveer',
        age:35
    },
    {
        name:'dipeeka',
        age:34
    },
    {
        name:'bhanu prakash reddy y',
        age:21
    }
]
for(var i=0;i<emp.length;i++)
{
    console.log(emp[i])
}
console.log('========================')
console.log(Math.min(1,2,3,3,4,4))
console.log(Math.max(1,2,3,4,3,5,5,3,2,22222))
console.log('===================')
var hobbies=['palying','running','jumping','painting']
for(var index in hobbies){
    console.log('hobbies using (of) loop '+hobbies[index])
}
for(var index in hobbies){
    console.log('hobbies using (in) loop and index value is '+index)
}
for(var val of hobbies){
    console.log('hobbies using (of) loop '+val)
}
for(var i in emp){
    console.log(emp[i])
}
console.log('===========================')
for(var value of emp){
    console.log(value)
}
console.log('+===================')