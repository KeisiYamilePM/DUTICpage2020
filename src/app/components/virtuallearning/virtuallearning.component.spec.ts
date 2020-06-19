import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuallearningComponent } from './virtuallearning.component';

describe('VirtuallearningComponent', () => {
  let component: VirtuallearningComponent;
  let fixture: ComponentFixture<VirtuallearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuallearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuallearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
