import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaticComponent } from './innovatic.component';

describe('InnovaticComponent', () => {
  let component: InnovaticComponent;
  let fixture: ComponentFixture<InnovaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
