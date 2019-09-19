// function tabel(){
//     let formdata = document.forms[0];
//     let fname1 = formdata.fname.value;
//     let sname1 = formdata.sname.value;
//     if( sname1.length>7 &&  fname1.length>4 ){
//         formdata.fname.style.border = '1px solid green';
//         formdata.sname.style.border = '1px solid green';
//         formdata.submitt.disabled = false;
//         let tr1 = document.createElement('tr')
//         // table1.appendChild(tr1);
//         let td1 = document.createElement('td');
//         td1.textContent = fname1;
//         tr1.appendChild(td1);
//         let td2 = document.createElement('td');
//         td1.textContent = sname1;
//         tr1.appendChild(td2);
//         let table1 = document.createElement('table');
//         table1.appendChild(tr1);
//         document.body.appendChild(tablel);
//         return true;

//     }else{
//         formdata.fname.style.border = '1px solid red';
//         formdata.sname.style.border = '1px solid red';
//         formdata.submitt.disabled = true;
//     }
    // if(fname1.length>1 && sname1.length>1){
    //     // let tr1 = document.createElement('tr')
    //     // document.body.appendChild(tr1);
    //     // let td1 = document.createElement('td');
    //     // td1.textContent = fname1;
    //     // tr1.appendChild(td1);
    //     // let td2 = document.createElement('td');
    //     // td1.textContent = sname1;
    //     // tr1.appendChild(td2);
    //     // let table1 = document.createElement('table');
    //     // table1.appendChild(tr1);
    //     // document.body.appendChild(tablel);
    //     formData.submitt.disabled = false;
    //     return true;
    // }
// }
function table(){
        let table = document.getElementById('table');
        newRow = table.insertRow(table.length);
        // cell1 = newRow.insertCell(0);
        // cell2 = newRow.insertCell(1);
        fname = document.getElementById('fname').value;
        lname = document.getElementById('lname').value;
        // cell1 = fname;
        // cell2 = lname;
        table.appendChild(newRow);
        newRow.appendChild(fname.value);
        newRow.appendChild(lname.value)
}