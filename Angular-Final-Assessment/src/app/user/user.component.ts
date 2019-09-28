import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private http:HttpClient) {
    this.getData();
   }


  api : any = [];
  api1:any = [];

  getData(){
    this.http.get(`https://jsonplaceholder.typicode.com/users`).subscribe(data=>{
      this.api = data;
    });
    this.api1 = this.api.website;
  }

 



  ngOnInit() {
  }

}
