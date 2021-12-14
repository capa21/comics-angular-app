import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ComicsService } from './comics.service';

describe('ComicsService', () => {
  let service: ComicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComicsService]
    });
    service = TestBed.inject(ComicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
