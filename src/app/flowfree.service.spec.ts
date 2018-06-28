import { TestBed, inject } from '@angular/core/testing';

import { FlowfreeService } from './flowfree.service';

describe('FlowfreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowfreeService]
    });
  });

  it('should be created', inject([FlowfreeService], (service: FlowfreeService) => {
    expect(service).toBeTruthy();
  }));
});
