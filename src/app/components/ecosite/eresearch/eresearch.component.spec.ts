import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EresearchComponent } from './eresearch.component';

describe('EresearchComponent', () => {
  let component: EresearchComponent;
  let fixture: ComponentFixture<EresearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EresearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
