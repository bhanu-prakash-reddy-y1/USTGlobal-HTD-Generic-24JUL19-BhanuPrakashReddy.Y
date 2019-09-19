import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-switch',
  templateUrl: './if-switch.component.html',
  styleUrls: ['./if-switch.component.css']
})
export class IfSwitchComponent implements OnInit {

  condition=true;
  constructor() { }
  printInput(inputElement){
    console.log(inputElement.value);
  }
  person = 'bhanu'
  ngOnInit() {
  }
}
