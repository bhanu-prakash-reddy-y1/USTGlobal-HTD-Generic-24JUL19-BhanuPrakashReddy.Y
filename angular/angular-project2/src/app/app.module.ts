import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikeDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
      {path: 'bike',component:BikesComponent},
      {path: 'bikedetails',component:BikeDetailsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
