import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition = false;
 users = [
   {
     id : 11111,
     name : 'bhanu prakash',
     city :'chittoor'
   },
   {
    id : 11112,
    name : 'ram bupal',
    city :'pune'
  }, {
    id : 11113,
    name : 'rajareddy',
    city :'punganur'
  }, {
    id : 11114,
    name : 'nirmala',
    city :'itikanellore'
  }, {
    id : 11115,
    name : 'revanth',
    city :'ananthapur'
  },
 ]
  constructor() { }
  removeUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition = true;
  }

  ngOnInit() {
  }

}
