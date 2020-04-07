import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarouselPortComponent } from './carousel-port/carousel-port.component';
import { HeaderPortComponent } from './header-port/header-port.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPortComponent,
    HeaderPortComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
