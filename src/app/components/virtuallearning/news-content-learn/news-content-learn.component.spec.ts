import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContentLearnComponent } from './news-content-learn.component';

describe('NewsContentLearnComponent', () => {
  let component: NewsContentLearnComponent;
  let fixture: ComponentFixture<NewsContentLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContentLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContentLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
