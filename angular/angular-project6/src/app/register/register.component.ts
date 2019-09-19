import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  get name(){
    return this.registerForm.get('name');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get phno(){
    return this.registerForm.get('phno');
  }
    registerForm = new FormGroup({
    name : new FormControl ('',[Validators.minLength(5),Validators.required]),
    email : new FormControl ('',[Validators.minLength(6),Validators.required,CustomValidator.noSpace]),
    phno : new FormControl ('',[Validators.minLength(10),Validators.required])
  })
  printFrom(register){
    console.log(register.value)
  }
}
