import { TestBed, inject } from '@angular/core/testing';

import { VictorServiceService } from './victor-service.service';

describe('VictorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VictorServiceService]
    });
  });

  it('should be created', inject([VictorServiceService], (service: VictorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
