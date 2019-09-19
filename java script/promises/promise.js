let resultData = new Promise(function(resolve,reject){
    if(10===10){
        reject('failed');
    }else{
        resolve('success');
    }
});
resultData.then((data)=>{
    console.log('then bloch',data);
}).catch((error)=>{
    console.log('catch block data',error);
});
console.log('===========================')
let employeData = new Promise(function(resolve,reject){
    const employee = [
        {
            name:'sharukh',
            age:60
        },
        {
            name :'sundari',
            age : 45
        },
        {
            name : 'bhanu',
            age:21
        }
    ]
    if(10>10){
        reject('failed');
    }else{
        resolve(employee);
    }
});
employeData.then((data)=>{
   // console.log('then block',data);
   return data;
}).catch((error)=>{
    console.log('catch block data',error);
}).then(function(data1){
    console.log('this is then block 2',data1);

})
