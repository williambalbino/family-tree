import { TestBed, inject } from '@angular/core/testing';

import { ArvoreService } from './arvore.service';

describe('ArvoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArvoreService]
    });
  });

  it('should be created', inject([ArvoreService], (service: ArvoreService) => {
    expect(service).toBeTruthy();
  }));
});
