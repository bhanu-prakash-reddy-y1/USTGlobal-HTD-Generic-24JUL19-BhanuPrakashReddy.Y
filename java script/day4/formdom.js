let label1 = document.createElement('label');
let brk = document.createElement('br');
let brk1 = document.createElement('br');
let brk2 = document.createElement('br');
console.log(label1);
let ele = document.getElementById('hi');
ele.appendChild(label1);
label1.textContent = 'Enter your name';
let inp1 = document.createElement('input');
console.log(inp1);
ele.appendChild(brk);
ele.appendChild(inp1);
ele.appendChild(brk1);


let label2 = document.createElement('label');
label2.textContent = 'Enter your Age'
ele.appendChild(label2);
let inp2 = document.createElement('input');
ele.appendChild(brk2)
ele.appendChild(inp2)


let label3 = document.createElement('label');
label3.textContent = 'Email id';
let brk3 = document.createElement('br');
let brk4 = document.createElement('br');
let inp3 = document.createElement('input');
inp3.type = 'email'
ele.appendChild(brk3);
ele.appendChild(label3);
ele.appendChild(brk4);
ele.appendChild(inp3);

let label4 = document.createElement('label');
label4.textContent = 'enter your date of birth';
let brk5 = document.createElement('br');
let brk6 = document.createElement('br');
let inp4 = document.createElement('input');
inp4.type = 'date';
ele.appendChild(brk5);
ele.appendChild(label4);
ele.appendChild(brk6);
ele.appendChild(inp4);

let label5 = document.createElement('label');
label5.textContent = 'i agree';
let brk7 = document.createElement('br');
let brk8 = document.createElement('br');
let inp5 = document.createElement('input');
inp5.type = 'checkbox';
ele.appendChild(brk7);
ele.appendChild(brk8);
ele.appendChild(inp5);
ele.appendChild(label5);

let label6 = document.createElement('label');
label6.textContent = 'gender';
let label7 = document.createElement('label');
label7.textContent = 'male';
let label8 = document.createElement('label');
label8.textContent = 'female';
let brk11 = document.createElement('br');
let brk12= document.createElement('br');
let inp6= document.createElement('input');
inp6.type = 'radio';
inp6.name = 'bp';
let inp7= document.createElement('input');
inp7.type = 'radio';
inp7.name = 'bp';
ele.appendChild(brk11);
ele.appendChild(label6);
ele.appendChild(inp6);
ele.appendChild(label7)
ele.appendChild(inp7);
ele.appendChild(label8)
ele.appendChild(brk12);



let sub  = document.createElement('button');
let brk9 = document.createElement('br');
let brk10 = document.createElement('br');
sub.textContent = 'submit';
ele.appendChild(brk9)
ele.appendChild(brk10)
ele.appendChild(sub);
