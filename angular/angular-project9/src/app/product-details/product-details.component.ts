import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 

  constructor(private service:ProductService) { 
    this.getData();
  }
 
  ngOnInit() {
  }
  product :any[]=[];
  getData(){
    this.service.getData().subscribe(data=>{
      this.product =  data;
    })
  }
 deleteProduct(key){
   this.service.deleteData(key).subscribe(data=>{
     console.log(data);
     this.getData();
   })
 }
 updateProduct(key, data){
   this.service.updateData(key , data).subscribe(data=>{
     console.log(data);
    //  this.getData();
   })
 }
 products = {
  id : '',
  title : '',
  imgUrl : '',
  description: ''
}
 sendProduct(i){
   this.products.id = i.id; 
   this.products.imgUrl = i.imgurl;
   this.products.title = i.title;
   this.products.description = i.description;
 }
}
