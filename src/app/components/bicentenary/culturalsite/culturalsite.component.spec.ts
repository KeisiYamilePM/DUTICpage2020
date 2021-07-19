import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalsiteComponent } from './culturalsite.component';

describe('CulturalsiteComponent', () => {
  let component: CulturalsiteComponent;
  let fixture: ComponentFixture<CulturalsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
