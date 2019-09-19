import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';//imported RouterModule from @angular/router
import { FormsModule } from '@angular/forms';//imported FormsModule from @angular/forms

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'about',component: AboutComponent},
      {path: 'register',component: RegisterComponent},
      {path: 'users',component: UsersComponent},
      {path: '**',component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
