import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComFiveModalFormComponent } from './com-five-modal-form.component';

describe('ComFiveModalFormComponent', () => {
  let component: ComFiveModalFormComponent;
  let fixture: ComponentFixture<ComFiveModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComFiveModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComFiveModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
