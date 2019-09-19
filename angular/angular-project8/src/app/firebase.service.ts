import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car-details/user';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }
  url='https://angular-cars-bf641.firebaseio.com/';
  selectedCar:Car = {
     name : null,
     model : null,
      release : null,
     cost : null,
    units : null,
    id : null
  }
  postData(data){
    return this.http.post(`${this.url}cars.json`,data)
  }
  updateData(data){
    return this.http.put(`${this.url}cars/${data.id}.json`,data);
  }
  
  deleteData(data) {
    return this.http.delete(`${this.url}cars/${data.id}.json`);
  }
}
