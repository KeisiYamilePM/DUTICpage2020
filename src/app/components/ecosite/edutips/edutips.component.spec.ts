import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutipsComponent } from './edutips.component';

describe('EdutipsComponent', () => {
  let component: EdutipsComponent;
  let fixture: ComponentFixture<EdutipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdutipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdutipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
