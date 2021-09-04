import { TestBed } from '@angular/core/testing';

import { ErrorMessageDispatcherService } from './error-message-dispatcher.service';

describe('ErrorMessageDispatcherService', () => {
  let service: ErrorMessageDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMessageDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
