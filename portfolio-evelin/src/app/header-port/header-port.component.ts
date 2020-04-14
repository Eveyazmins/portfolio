import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header-port',
  templateUrl: './header-port.component.html',
  styleUrls: ['./header-port.component.css']
})
export class HeaderPortComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  /*
  Metodo que redirige el scroll hacia un div al final de app (theEnd). Volver a probar poniendo 
  dentro de un div al elemento al que quiero ir (servicios)
  */
  goToEnd()
  {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

}
