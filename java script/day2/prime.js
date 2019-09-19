function prime(num){
    if(num<2){
        console.log(num+'is not prime number');
    }
    for(var i = 2;i<=num/2;i++){
        if(num%i==0){
            console.log(num+" is not prime");
            return;
        }else{
            console.log(num +' is prime');
            return;
        }
    }
    console.log(num+' is prime')
}
prime(2);
prime(10);
