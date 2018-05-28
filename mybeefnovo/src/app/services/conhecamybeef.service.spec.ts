import { TestBed, inject } from '@angular/core/testing';

import { ConhecamybeefService } from './conhecamybeef.service';

describe('ConhecamybeefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConhecamybeefService]
    });
  });

  it('should be created', inject([ConhecamybeefService], (service: ConhecamybeefService) => {
    expect(service).toBeTruthy();
  }));
});
