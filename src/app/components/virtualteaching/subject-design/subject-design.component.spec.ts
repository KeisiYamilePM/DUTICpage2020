import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDesignComponent } from './subject-design.component';

describe('SubjectDesignComponent', () => {
  let component: SubjectDesignComponent;
  let fixture: ComponentFixture<SubjectDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
