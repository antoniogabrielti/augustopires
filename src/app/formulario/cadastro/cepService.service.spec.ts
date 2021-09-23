/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CepServiceService } from './cepService.service';

describe('Service: CepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepServiceService]
    });
  });

  it('should ...', inject([CepServiceService], (service: CepServiceService) => {
    expect(service).toBeTruthy();
  }));
});
