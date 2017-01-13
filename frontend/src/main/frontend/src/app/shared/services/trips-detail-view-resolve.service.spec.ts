/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TripsDetailViewResolveService } from './trips-detail-view-resolve.service';

describe('TripsDetailViewResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsDetailViewResolveService]
    });
  });

  it('should ...', inject([TripsDetailViewResolveService], (service: TripsDetailViewResolveService) => {
    expect(service).toBeTruthy();
  }));
});
