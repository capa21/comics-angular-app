import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ComicsService } from '../services/comics/comics.service';

import { StateService } from './state.service';


describe('StateService', () => {
  let service: StateService;
  let comicsService: ComicsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StateService, ComicsService]
    })
    comicsService = TestBed.inject(ComicsService);
  });

  it('should be created', () => {
    service = TestBed.inject(StateService);
    expect(service).toBeTruthy();
  });
});
