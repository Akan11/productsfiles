import { TestBed } from '@angular/core/testing';

import { EmiCardService } from './emi-card.service';

describe('EmiCardService', () => {
  let service: EmiCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmiCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
