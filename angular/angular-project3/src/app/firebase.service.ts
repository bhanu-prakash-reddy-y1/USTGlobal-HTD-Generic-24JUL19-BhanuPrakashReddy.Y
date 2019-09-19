import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url: string = 'https://angular-project-32b01.firebaseio.com/';


  constructor(private http:HttpClient) { }
  product:any[] =[];
  postProduct(data){
    return this.http.post(`${this.url}Product.json`,data)
  }
  //************************************
  getData(){
    this.http.get(`${this.url}Product.json`).pipe(map(data=>{
      const productArray:any[]=[];
      for(const key in data){
        productArray.push ({...data[key],id:key})
      }
      return productArray;
    })).subscribe(resdata=>{
      this.product = resdata;
      console.log(this.product);
    })
  }
  deleteData(data){
    return this.http.delete(`${this.url}Product/${data.id}.json`)
  }
}
