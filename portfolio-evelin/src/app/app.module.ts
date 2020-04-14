import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { CarouselPortComponent } from './carousel-port/carousel-port.component';
import { HeaderPortComponent } from './header-port/header-port.component';
import { MisserviciosPortComponent } from './misservicios-port/misservicios-port.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPortComponent,
    HeaderPortComponent,
    MisserviciosPortComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
