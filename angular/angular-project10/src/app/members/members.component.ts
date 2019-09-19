import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members:any[]= []

  constructor(private service: MemberService) { 
    this.getMember();
  }
  getMember(){
    this.service.getData().subscribe(data=>{
      this.members = data;
    })
  }

  deleteMember(key){
    this.service.deleteMember(key).subscribe(data=>{
      console.log(data);
      this.getMember();
    })
  }
  
  member={
    id:'',
    name:'',
    money:'',
    date:''
  }

  sendMember(key,data){
    this.service.updateMember(key,data).subscribe(data=>{
      console.log(data);
      this.getMember();
    })
  }

  updateMembers(i){
    this.member.id=i.id;
    this.member.name=i.name;
    this.member.money=i.money;
    this.member.date=i.date;

  }

  ngOnInit() {
  }

}
