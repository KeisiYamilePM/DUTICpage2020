import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsgoogleComponent } from './toolsgoogle.component';

describe('ToolsgoogleComponent', () => {
  let component: ToolsgoogleComponent;
  let fixture: ComponentFixture<ToolsgoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsgoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
