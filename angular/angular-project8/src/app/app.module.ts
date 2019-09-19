import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { NgModule } from '@angular/core';
import { JsonplaceholderComponent } from './jsonplaceholder/jsonplaceholder.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent,
    HomeComponent,
    FirebaseComponent,
    JsonplaceholderComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot([
      { path : '', component: HomeComponent},
      { path : 'cars', component: CarsComponent},
      { path : 'firebase', component: FirebaseComponent},
      { path : 'json', component: JsonplaceholderComponent},
      { path : 'cardetails',component:CarDetailsComponent}
    ]), HttpClientModule,FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
