function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFun = sum(10,20);
var total = addFun();
console.log('total',total);
var addAB = sum(34,49);
var total1 = addAB();
console.log('total 1',total1);
console.log(window);
console.log(this);
console.log(this===window);
var name = 'rakshith shetty';
console.log(window.name);
console.log(this.name);
var person = {
            name : 'dulquer salmam',
            age : 25,
            getName : function(){
                console.log(this);
                console.log(window );
                getData();
                function getData(){
                    console.log('get data method',this);
                    console.log('get data method',this.name);
                    console.log('get data method',this.age);
                }
                return this.name;
            }
            }
var heroName = person.getName();
console.log('hero name',heroName);
for(var i = 0;i<=5;i++){
    console.log(i);
}
console.log('i  ',i);
for(let j = 0;j<4;j++){
    console.log(j)
}
//console.log(j);
var hobbies = ['playing','singing','dancing','jumping','walking'];
console.log('hobbies',hobbies);
var hobbies = ['numismatics','tecahing','hello'];
console.log('hobbies redecleration',hobbies);
console.log('==*******************==');
let games = ['cricket','football','hockey','badminton'];
console.log('games are',games);
 games = ['kabaddi'];
 console.log('new game',games);
 console.log('==*******************==');
 const fruits = ['banana','apple','orange'];
 console.log(fruits);
 //const fruits = ['bag','book'];//we can not redeclere 
 console.log('-----nested array--------')
 fruits[0] = ['bag','book'];
 console.log(fruits);//we can not reintialize  we can modify array index values by using const keyword 
