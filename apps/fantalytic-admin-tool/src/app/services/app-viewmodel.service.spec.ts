import { TestBed } from '@angular/core/testing';

import { AppViewmodelService } from './app-viewmodel.service';

describe('AppViewmodelService', () => {
  let service: AppViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
