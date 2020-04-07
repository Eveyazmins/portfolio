import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortComponent } from './header-port.component';

describe('HeaderPortComponent', () => {
  let component: HeaderPortComponent;
  let fixture: ComponentFixture<HeaderPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
