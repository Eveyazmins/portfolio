import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPortComponent } from './carousel-port.component';

describe('CarouselPortComponent', () => {
  let component: CarouselPortComponent;
  let fixture: ComponentFixture<CarouselPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
