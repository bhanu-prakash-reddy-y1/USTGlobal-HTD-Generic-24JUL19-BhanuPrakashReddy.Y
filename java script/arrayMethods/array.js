var hobbies=['carroms','football','photography','monoacting','reading'];
hobbies.forEach(function(v,i){
    if(v.length>7)
    console.log('index is '+i+" and "+'value '+v);
})
console.log("============================================")
console.log(myname);
var myname = 'bhanu prakash reddy';
console.log(myname);
function getName(){
    myname='bhanu';
    console.log(myname)
}
console.log('********************************************');
getName();
function getAge(){
    console.log(age);
    var age=21;
    console.log(age);
}
getAge();
console.log('*********************************************');
console.log(Array.isArray(hobbies));
console.log('*********************************************');
console.log(hobbies.includes('football'));
console.log('*********************************************');
console.log('new length of hobbies is '+hobbies.push('cricket'));
console.log('hobbies after push '+hobbies)
console.log('*********************************************');
console.log("the removed element is "+hobbies.pop());
console.log('hobbies after pop '+hobbies);
console.log('*********************************************');
console.log(hobbies.unshift('cycling','kabaddi'));
console.log('hobbies after unshift '+hobbies);
console.log('*********************************************');
console.log('removed element is '+hobbies.shift());
console.log('hobbies after shift '+hobbies);
console.log('*********************************************');
console.log('removed element is '+hobbies.splice(0,1,'hello'));
console.log(hobbies);
console.log('*********************************************');
console.log(hobbies.slice(0,3));
console.log('*********************************************');
var string=hobbies.join('-');
console.log(string);
console.log('*********************************************');
console.log(hobbies.indexOf('football'));
console.log(hobbies.indexOf('footballs'));
console.log('*********************************************');
var number=[10,20,30,40,50,60];
var number1 = number.map((v,i)=>{
    v = v+10;
    return v;
})
console.log('after map '+number1);
console.log('*********************************************');
var number2 = number.filter((v)=>{
    return v > 10;
})
console.log('after filter '+number2);
console.log('*********************************************');
var items=[{
    name : 'lipstick',
    price : 100,
    id : 1
},
{
    name : 'perfume',
    price : 500,
    id : 2
},
{
    name : 'watch',
    price : 1000,
    id : 3
},
{
    name : 'shoes',
    price : 2000,
    id : 3

}]
 var array= items.map(function(item){
    item.price = item.price + 100;
    return item;
})
console.log(array);
var array1=items.filter(function(item){
    var itemFilter = item.price>100 && item.name.length>7;
    return itemFilter;
})
console.log(array1)