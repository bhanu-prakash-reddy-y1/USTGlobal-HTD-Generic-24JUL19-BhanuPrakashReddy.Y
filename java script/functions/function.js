function sum(num1,num2){
    if((num1!==undefined) && (num2!==undefined)){
        sumValue=num1+num2;
        return sumValue;
    }else{
        console.log("please enter required values")
    }
}

var sumValues = sum(10,20);
console.log('sum '+sumValues);
var addData=function(num1,num2){
    if((num1!==undefined) && (num2!==undefined)){
        sumValue=num1+num2;
        return sumValue;
    }else{
        console.log("please enter required values")
    }
}
var addition = addData(10,2000000)
console.log('sum = '+addition);

( function sumData (num1,num2){
    var sumdata = num1+num2;
    console.log(sumdata);
}(12,3000));
var mul=(num1,num2)=>{
    return multipli=num1*num2
}
var multiply = mul(10,20)
console.log(multiply);

var number = (num1,num2) => num1+num2;
console.log(number((Math.random()*100),(Math.random)))
