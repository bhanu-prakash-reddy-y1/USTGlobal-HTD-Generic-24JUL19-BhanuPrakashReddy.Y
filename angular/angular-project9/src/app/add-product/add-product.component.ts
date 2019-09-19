import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service : ProductService) { }
  sendProduct(form: NgForm){
    this.service.postData(form).subscribe(data=>{
      console.log(data);
      // form.reset();
    },err=>{
      console.log(err)
    },()=>{
      console.log('data submitted');
    })
    // form.reset();
  }
  ngOnInit() {

  }

}
