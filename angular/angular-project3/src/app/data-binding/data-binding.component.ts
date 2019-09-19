import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  redColor = true;
  name = 'ybpr';
  fullname = 'ybpr = ?';
  age = 'age : ?';

  textClasses = 'bg-success text-light';
  imgURL = 'https://cdn.pixabay.com/photo/2015/06/25/17/56/people-821624__340.jpg';
  paragraphStyle = true;
  padding = '50px';
  colspan = 2;
  constructor() { 
    setTimeout(() => {
      this.redColor = false;
      this.fullname = 'yellarubylu bhanu prakash reddy';
      this.imgURL = 'https://cdn.pixabay.com/photo/2016/11/29/05/44/adult-1867608__340.jpg';
      this.age = 'age : 21';
     this.paragraphStyle = false;
    },4000);
  }


}
