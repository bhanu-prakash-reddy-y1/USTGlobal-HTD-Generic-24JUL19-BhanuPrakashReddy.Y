import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { FooterComponent } from './footer/footer.component';
import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    FooterComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'register', component : RegisterComponent},
      { path : 'login', component : LoginComponent },
      { path : 'aboutus', component : AboutUsComponent,children :[
        { path : 'child1' , component :Child1Component },
        { path : 'child2' , component :Child2Component },
        { path : 'child3' , component :Child3Component }
      ]},
      { path : 'observables',component : ObservablesComponent},
      { path : '**',component : PageNotFoundComponent },
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
