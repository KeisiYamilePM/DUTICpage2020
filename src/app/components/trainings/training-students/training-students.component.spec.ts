import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingStudentsComponent } from './training-students.component';

describe('TrainingStudentsComponent', () => {
  let component: TrainingStudentsComponent;
  let fixture: ComponentFixture<TrainingStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
