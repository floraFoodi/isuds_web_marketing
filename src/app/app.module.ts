import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomComponent } from './bottom/bottom.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { WhyisudsComponent } from './whyisuds/whyisuds.component';
import { SuccessstoryComponent } from './successstory/successstory.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestdisplayComponent } from './testdisplay/testdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomComponent,
    ImgsliderComponent,
    TopComponent,
    HomeComponent,
    ProductComponent,
    WhyisudsComponent,
    SuccessstoryComponent,
    ContactusComponent,
    TestdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
