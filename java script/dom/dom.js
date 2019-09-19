//getElementById
let pElement = document.getElementById('demo');
console.log(pElement);
pElement.textContent = 'thit is my new p tag';
//getElementByClassName
let divElements = document.getElementsByClassName('blue');
console.log(divElements);
//getElementsByTagName
let pElements = document.getElementsByTagName('p');
console.log(pElements);
let nameElements = document.getElementsByName('helement');
console.log(nameElements);
let demoElement = document.querySelector('#demo');
console.log(demoElement);
let classElements  = document.querySelectorAll('.blue');
console.log(classElements);
let buttonElement = document.createElement('button');
buttonElement.textContent= 'click me';
console.log(buttonElement)
document.body.appendChild(buttonElement);
let spanEle = document.getElementById('spanid');
spanEle.style.color = 'brown';
let buttonElement1 = document.getElementById('buttonEle');
buttonElement1.className = 'add1';
buttonElement1.classList = 'add add1';   
console.log('==============tabel=================');
document.getElementById('divid').innerHTML= `<table>
<tr>
    <td>name</td>
    <td>age</td>
</tr>
<tr>
    <td>bhanu</td>
    <td>21</td>
</tr>
<tr>
    <td>prakash</td>
    <td>22</td>
</tr>
<tr>
    <td>reddy</td>
    <td>41</td>
</tr>
</table>` 
let pElementData = document.getElementById('demo1') ;
//pElementData.style.color = 'blue';
pElementData.className = 'blue'        