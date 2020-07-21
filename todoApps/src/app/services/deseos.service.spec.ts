import { TestBed } from '@angular/core/testing';

import { DeseosService } from './deseos.service';

describe('DeseosService', () => {
  let service: DeseosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeseosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
