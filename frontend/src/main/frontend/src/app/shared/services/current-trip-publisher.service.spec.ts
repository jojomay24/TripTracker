/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrentTripPublisherService } from './current-trip-publisher.service';

describe('CurrentTripPublisherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTripPublisherService]
    });
  });

  it('should ...', inject([CurrentTripPublisherService], (service: CurrentTripPublisherService) => {
    expect(service).toBeTruthy();
  }));
});
