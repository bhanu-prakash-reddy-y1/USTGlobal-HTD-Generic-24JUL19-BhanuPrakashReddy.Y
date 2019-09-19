function error(){
    let formdata = document.forms[0];
    let username = formdata.uname.value;
    let Password = formdata.password.value;
    if( username.length>4 && Password.length>7){
        formdata.uname.style.border = '1px solid green';
        formdata.password.style.border = '1px solid green';
        formdata.submitt.disabled = false;
    }else{
        formdata.uname.style.border = '1px solid red';
        formdata.password.style.border = '1px solid red';
        formdata.submitt.disabled = true;
    }
}