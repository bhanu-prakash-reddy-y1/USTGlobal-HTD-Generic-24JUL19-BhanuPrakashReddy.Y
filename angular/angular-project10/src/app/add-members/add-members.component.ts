import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  constructor(private service: MemberService) { }

  sendMember(form){
    this.service.postData(form).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      console.log("data submitted successfully");
    })

  }
  ngOnInit() {
  }

}
