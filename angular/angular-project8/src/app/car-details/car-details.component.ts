import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car:any[]=[];
  constructor(private http:HttpClient,
    private firebase:FirebaseService,
    private router:Router) {
    http.get<any>('https://angular-cars-bf641.firebaseio.com/cars.json').pipe(map(resData=>{
      const carsArray:any[]=[];
      for (const key in resData){
        carsArray.push({...resData[key],id:key})
      }
      return carsArray;
    }))
    .subscribe(data=>{
      this.car= data;
    })
   }


  ngOnInit() {
  }
  // updateCar(c){
  //   this.firebase.selectedCar=c;
  //   this.router.navigateByUrl('/car');
  // }
  deleteCar(user) {
      this.firebase.deleteData(user).subscribe(data => {
        console.log(data);
      });
    
    }
}
