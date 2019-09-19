import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { SourcesComponent } from './sources/sources.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    SourcesComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path : '',component  : HomeComponent},
      { path :'bussiness',component:BusinessComponent},
      { path :'general',component:GeneralComponent},
      { path : 'science',component:ScienceComponent},
      { path :'source',component:SourcesComponent},
      { path :'sports',component:SportsComponent},
      {path : 'technology',component:TechnologyComponent},
      { path : 'entertinment',component:EntertainmentComponent},
      { path : 'health',component:HealthComponent},
      {path:'technology',component:TechnologyComponent}
    ]),HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
