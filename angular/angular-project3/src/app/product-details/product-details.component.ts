import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }


  ngOnInit() {
    this.firebase.getData();
    console.log(this.firebase.product);
  }
  deleteProduct(i){
    this.firebase.deleteData(i).subscribe(data=>{
      console.log(data);
    })
  }
}
