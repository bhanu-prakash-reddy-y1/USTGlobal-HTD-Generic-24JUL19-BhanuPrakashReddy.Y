import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members:any[]= []

  constructor(private service: MemberService) { 
    this.getMember();
  }
  getMember(){
    this.service.getData().subscribe(data=>{
      this.members = data;
    })
  }

  ngOnInit() {

  }

}
