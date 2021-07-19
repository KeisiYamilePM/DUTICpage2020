import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicentenaryComponent } from './bicentenary.component';

describe('BicentenaryComponent', () => {
  let component: BicentenaryComponent;
  let fixture: ComponentFixture<BicentenaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicentenaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicentenaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
