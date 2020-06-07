import { TestBed } from '@angular/core/testing';

import { OnlineWorkshopsService } from './online-workshops.service';

describe('OnlineWorkshopsService', () => {
  let service: OnlineWorkshopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineWorkshopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
