import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-view-all-task',
  templateUrl: './view-all-task.component.html',
  styleUrls: ['./view-all-task.component.css']
})
export class ViewAllTaskComponent implements OnInit {

  constructor( private service : TasksService) { 
    // console.log(this.taskdetails);
    this.getData();
  }
  tasksdetails:any=[];

  getData(){
    this.tasksdetails=this.service.tasks;
    console.log(this.tasksdetails);
  }

  // @Input() taskdetails:any[];
  ngOnInit() {

  }

}
