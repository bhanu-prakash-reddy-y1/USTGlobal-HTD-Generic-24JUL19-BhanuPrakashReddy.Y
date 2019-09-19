employeeJson = {
    name : 'bhanu',
    age : 21,
    hobbies : ['caroms','playing']
}
console.log(`my name is ${employeeJson.name}`);
console.log(employeeJson);
let jsonObject = JSON.stringify(employeeJson);
console.log(jsonObject);
let jsObject = JSON.parse(jsonObject);
console.log(jsObject);

