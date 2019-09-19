import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor( private service: GitService,private http: HttpClient) {
    this.getdata();
   }

  user:any = [];
  getdata(){
    this.service.getData().subscribe(data=>{
      this.user = data;
    })
  }
  sendKey(u){
    console.log(u.id);
    this.service.deleteData(u.id).subscribe(data=>{
      console.log(data);
    });
    this.user.u
  }
  ngOnInit() {
  }

}
