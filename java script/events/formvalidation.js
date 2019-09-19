function validateForm(){
  let formData = document.forms[0]; 
  let userName = formData.uname.value;
   let passwordValue = formData.password.value;
  if(userName.length>4 && passwordValue.length>7){
      console.log('success');
      formData.uname.style.border = '1px solid green';
      formData.password.style.border = '1px solid green';
      formData.loginsubmit.disabled = false;
  }else{
      formData.uname.style.border = '4px solid red';
      formData.password.style.border = '2px solid red';
      formData.loginsubmit.disabled = true; 
  } 
}