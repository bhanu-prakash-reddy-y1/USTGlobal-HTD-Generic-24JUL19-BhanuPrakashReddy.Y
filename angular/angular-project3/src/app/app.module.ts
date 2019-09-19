import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SampleComponent } from './sample.component';
import { HeaderComponent } from './header/header.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfSwitchComponent } from './if-switch/if-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MyDecorativeDirective } from './my-decorative.directive';
import { MyDirectiveDirective } from './my-directive.directive';
import { ParantComponent } from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { Home1Component } from './home1/home1.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Heade1Component } from './heade1/heade1.component';

@NgModule({
  declarations: [
    AppComponent,SampleComponent, HeaderComponent, DataBindingComponent, TwoWayComponent, DirectivesComponent, IfSwitchComponent, AttributeDirectivesComponent, MyDecorativeDirective, MyDirectiveDirective, ParantComponent, ChildComponent, BikesComponent, BikeDetailsComponent, Home1Component, ProductComponent, ProductDetailsComponent, Heade1Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path: '',component: Home1Component},
      { path: 'product',component:ProductComponent},
      { path : 'productdetails',component:ProductDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
