import { Component, OnInit } from '@angular/core';
// import { interval,Subscription } from 'rxjs';
// import { map }from 'rxjs/Operator';
import { UserService} from '../user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']

})
export class ObservablesComponent implements OnInit {

  constructor(private userService : UserService) { }
  // mySubscription : Subscription;
  ngOnInit() {
  //   this.mySubscription = interval(1000).pipe(map(data=>{
  //     return data*10;
  //   })).subscribe(data=>{
  //     console.log(data);
  //   }, err =>{
  //     console.log(err);
  //   },()=>{
  //     console.log('complete')
  //   })
  // }
  // ngOnDestroy(){
  //   this.mySubscription.unsubscribe()
  //}
  }

}
