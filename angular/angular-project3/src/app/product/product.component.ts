import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private firebase : FirebaseService) { }
  sendProduct(form : NgForm){
    this.firebase.postProduct(form.value).subscribe((resData)=>{
      console.log(resData);
      form.reset();
    });
  }

  ngOnInit() {
  }

}
