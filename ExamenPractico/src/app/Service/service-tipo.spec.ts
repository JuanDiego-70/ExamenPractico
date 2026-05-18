import { TestBed } from '@angular/core/testing';

import { ServiceTipo } from './service-tipo';

describe('ServiceTipo', () => {
  let service: ServiceTipo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTipo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
