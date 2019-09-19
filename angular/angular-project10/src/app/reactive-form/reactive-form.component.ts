import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators, NgForm} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  get name(){
    return this.reactiveForm.get('name');
  }
  get password(){
    return this.reactiveForm.get('password');
  }

  reactiveForm = new FormGroup({
    name : new FormControl('',[Validators.minLength(5),Validators.required,Validators.maxLength(10)]),
    password : new FormControl('',[Validators.minLength(8),Validators.pattern('ybpr1234')])
  })

  user=[];

  sendForm(reactiveForm:NgForm){
    this.user.push(reactiveForm.value);
    console.log(reactiveForm.value);

    reactiveForm.reset();

  }

  ngOnInit() {
  }

}
