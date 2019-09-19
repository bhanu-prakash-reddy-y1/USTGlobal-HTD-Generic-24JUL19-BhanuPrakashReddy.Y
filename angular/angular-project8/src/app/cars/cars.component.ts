import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,private router:Router) { }
  postCar(form: NgForm){
      this.firebaseService.postData(form.value).subscribe(data=>{
        console.log(data);
        form.reset();
        this.router.navigateByUrl('/cardetails');
      },err=>{
        console.log(err)
      });
    }

  ngOnInit() {
  }

}
