import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsonplaceholder',
  templateUrl: './jsonplaceholder.component.html',
  styleUrls: ['./jsonplaceholder.component.css']
})
export class JsonplaceholderComponent implements OnInit {

  json:any[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('http://jsonplaceholder.typicode.com/posts')
    .subscribe(resData=>{
      this.json= resData;
    })
  }

  ngOnInit() {
  }

}
