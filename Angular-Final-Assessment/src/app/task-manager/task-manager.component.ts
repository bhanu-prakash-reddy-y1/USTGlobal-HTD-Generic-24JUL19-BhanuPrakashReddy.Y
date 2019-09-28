import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styles: []
})
export class TaskManagerComponent implements OnInit {
  tasks:any=[];
  constructor() { }
  sendTask(form:NgForm){
    this.tasks.push(form);
    console.log(this.tasks);
    // form.reset();
  }
  delete(i){
    this.tasks.pop(i);
  }

  ngOnInit() {
  }

}
