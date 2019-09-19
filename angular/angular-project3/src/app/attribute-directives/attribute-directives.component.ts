import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  isSuccess = true;
  classesArray = ['bg-danger','text-primary','mt-5']
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
this.isSuccess = true;
    },10000)
  }

}
