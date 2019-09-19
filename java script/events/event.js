function sayhello(){
    alert('welcome');
}
let buttonELement  = document.getElementById('clickButton');
buttonELement.onclick = function(){
    alert('hello world!!!!!!')
}
let createButton = document.getElementById('bhanu');
createButton.onclick = function(){
   let elem = document.createElement('p');
   elem.textContent = 'this is bhanu prakash redddy second p element';
   document.body.appendChild(elem);
}
function createPelement(){
    let pELement = document.createElement('p');
    pELement.textContent = 'this is bhanu prakash reddy';
    document.body.appendChild(pELement)
}
let pelem = document.getElementById('alertHi');
pelem.addEventListener('click',function(){
    alert('hi');
});
let h1ELement = document.createElement('h1');
function showText(){
    let inputElement = document.getElementById('showData');
    console.log(inputElement.vlaue);
    h1ELement.textContent = inputElement.value;
    document.body.appendChild(h1ELement);
}