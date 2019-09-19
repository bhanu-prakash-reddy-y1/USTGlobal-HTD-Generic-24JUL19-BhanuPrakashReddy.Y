var num=[10,20,30,40,50];
var addition=0;
function add(){
    for(var i = 0;i<num.length;i++){
       addition+=num[i]
       
    }
    console.log(addition);
}
add();//named function
var addi=0
var addarr=function(){
    for(var i = 0;i<num.length;i++){
        addi+=num[i]
        
     }
     console.log(addi);
}
addarr();//ananymus function
var sum=0;
(function addarray(){
    for(var i = 0;i<num.length;i++){
        sum+=num[i]
        
     }
     console.log(sum);
}())//iife (immediate invoked function expression)
var addit=0;
var addarry1 =()=>{
    for(var i = 0;i<num.length;i++){
        addit+=num[i]
        
     }
     console.log(addit);
}
addarry1();//fat arrow function
