import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisserviciosPortComponent } from './misservicios-port.component';

describe('MisserviciosPortComponent', () => {
  let component: MisserviciosPortComponent;
  let fixture: ComponentFixture<MisserviciosPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisserviciosPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisserviciosPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
