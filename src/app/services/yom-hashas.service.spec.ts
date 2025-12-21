import { TestBed } from '@angular/core/testing';

import { YomHashasService } from './yom-hashas.service';

describe('YomHashasService', () => {
  let service: YomHashasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YomHashasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
