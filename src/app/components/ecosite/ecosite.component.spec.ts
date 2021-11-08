import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcositeComponent } from './ecosite.component';

describe('EcositeComponent', () => {
  let component: EcositeComponent;
  let fixture: ComponentFixture<EcositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
