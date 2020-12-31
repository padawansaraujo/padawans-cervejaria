import { TestBed } from '@angular/core/testing';

import { ListagensService } from './listagens.service';

describe('ListagensService', () => {
  let service: ListagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
