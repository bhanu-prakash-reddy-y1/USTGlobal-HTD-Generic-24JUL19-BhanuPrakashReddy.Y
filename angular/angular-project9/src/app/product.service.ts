import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:any='https://angular-project-32b01.firebaseio.com/';

  constructor(private http:HttpClient) { }
  postData(data){
    return this.http.post(`${this.url}/practice.json`,data);
  }
  user:any[]=[];
  getData(){
  return  this.http.get(`${this.url}/practice.json`).pipe(map(data=>{
             let Array:any[] = [];
             for(let key in data){
              Array.push({...data[key],id : key});
      }
      return Array;
    }))
  }
  deleteData(key){
    return this.http.delete(`${this.url}/practice/${key}.json`);
  }
  updateData(key , data){
    return this.http.put(`${this.url}/practice/${key}.json`,data);
  }
}
