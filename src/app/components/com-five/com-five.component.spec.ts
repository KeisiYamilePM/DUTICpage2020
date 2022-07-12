import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComFiveComponent } from './com-five.component';

describe('ComFiveComponent', () => {
  let component: ComFiveComponent;
  let fixture: ComponentFixture<ComFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
