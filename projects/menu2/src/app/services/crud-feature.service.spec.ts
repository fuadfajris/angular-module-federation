import { TestBed } from '@angular/core/testing';

import { CrudFeatureService } from './crud-feature.service';

describe('CrudFeatureService', () => {
  let service: CrudFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
