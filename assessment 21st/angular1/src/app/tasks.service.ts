import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasks:any[]=[];
  postTask(task){
    this.tasks=task;
    console.log(this.tasks);
  }

}
