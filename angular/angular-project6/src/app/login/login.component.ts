import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users = [];
  fromDetails(loginForm : NgForm){
    console.log(loginForm.value);
    this.users.push(loginForm.value);
    console.log(this.users)
    loginForm.reset();
  }

}
