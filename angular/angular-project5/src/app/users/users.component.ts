import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private firebaseServices: FirebaseService, private router: Router) { }
  upadateUser(user) {
    this.firebaseServices.selectedUser = user;
    this.router.navigateByUrl('/firebase');
  }
  ngOnInit() {
    this.firebaseServices.getData();
    console.log(this.firebaseServices.users);
  }
  deleteUser(user) {
    this.firebaseServices.deleteData(user).subscribe(data => {
      console.log(data);
      this.firebaseServices.getData();
    });

  }

}
