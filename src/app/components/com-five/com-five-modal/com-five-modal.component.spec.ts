import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComFiveModalComponent } from './com-five-modal.component';

describe('ComFiveModalComponent', () => {
  let component: ComFiveModalComponent;
  let fixture: ComponentFixture<ComFiveModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComFiveModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComFiveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
