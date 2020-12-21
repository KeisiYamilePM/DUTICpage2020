import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinturilloComponent } from './pinturillo.component';

describe('PinturilloComponent', () => {
  let component: PinturilloComponent;
  let fixture: ComponentFixture<PinturilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinturilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinturilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
