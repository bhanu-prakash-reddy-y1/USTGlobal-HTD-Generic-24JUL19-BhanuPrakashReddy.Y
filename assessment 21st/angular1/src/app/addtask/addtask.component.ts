import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private service:TasksService) { }



  ngOnInit() {
  }

  sendtask(task){
    this.service.postTask(task);

  }

}
