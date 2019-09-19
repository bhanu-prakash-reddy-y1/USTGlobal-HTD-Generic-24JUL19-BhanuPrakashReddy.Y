import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: string = 'https://angular-project-32b01.firebaseio.com/';
  //for updating prupose selected user
  selectedUser: User = {
    name: null,
    email: null,
    phno: null,
    id: null
  }
  constructor(private http: HttpClient) { }
  users = [];
  postData(data) {
  return  this.http.post(`${this.url}users.json`, data);// two arguments
  }
  getData() {
    this.http.get(`${this.url}users.json`).pipe(map(resData => {
      const userArray: any[] = [];
      for (const key in resData) {
        userArray.push ({...resData[key], id: key});
      }
      return userArray;
    })).subscribe(data => {
      this.users = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
   updateData(data) {
    return this.http.put(`${this.url}users/${data.id}.json`, data); //to update data we use put(2 argmts) method
   }
   deleteData(data) {
     return this.http.delete(`${this.url}users/${data.id}.json`);
   }
}