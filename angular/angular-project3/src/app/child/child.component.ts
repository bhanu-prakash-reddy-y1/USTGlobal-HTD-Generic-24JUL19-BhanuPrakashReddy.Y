import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParant = '';
  // @Input() dataFromParant1 = '';
  @Output() childData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.childData.emit('this is data from child')
  }

}
