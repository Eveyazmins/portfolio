import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-port',
  templateUrl: './carousel-port.component.html',
  styleUrls: ['./carousel-port.component.css']
})
export class CarouselPortComponent implements OnInit {
  
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

 // images = [1, 2, 3].map(() => 'https://picsum.photos/900/500?random&t=${Math.random()');

  constructor() { }

  ngOnInit(): void {
  }

}
