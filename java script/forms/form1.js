// function validate(){
//  let employeeData = document.forms['employeeForm'];
//  let empPassword = employeeData.pass.value;
//  let empCPassword = employeeData.cpass.value;
//  if(empPassword===' ' && empCPassword===' '){
//      return false;
//  }
//  if (empPassword === empCPassword ){
//      alert('success');
//      return true;
//  }else{
//      alert('password not matching');
//      return false;
//  }
// }
function validate(){
    let employeeData = document.forms[0];
    let empPassword = employeeData.pass.value;
    let empCPassword = employeeData.cpass.value;
    if(empPassword===' ' && empCPassword===' '){
        return false;
    }
    if (empPassword === empCPassword ){
        alert('success');
        return true;
    }else{
        let error1 = document.createElement('p');
        error1.textContent='password not matching';
        document.body.appendChild(error1);
        error1.style.color = 'red';
        let bp1 = document.getElementById('reenter');
        bp1.appendChild(error1);
       //alert('password not matching');
        return false;
    }
   }