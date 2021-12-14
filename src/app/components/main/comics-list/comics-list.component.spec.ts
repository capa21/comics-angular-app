import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { StateService } from 'src/app/state/state.service';

import { ComicsListComponent } from './comics-list.component';

describe('ComicsListComponent', () => {
  beforeEach(async () => {
    let stateService: StateService
    await TestBed.configureTestingModule({
      declarations: [ComicsListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        StateService,
        ComicsService
      ]
    }).compileComponents();
    stateService = TestBed.inject(StateService);
  });



  it('should create', () => {
   const fixture = TestBed.createComponent(ComicsListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
