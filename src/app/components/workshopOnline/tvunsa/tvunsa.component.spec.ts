import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvunsaComponent } from './tvunsa.component';

describe('TvunsaComponent', () => {
  let component: TvunsaComponent;
  let fixture: ComponentFixture<TvunsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvunsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvunsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
