import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComicsService } from './services/comics/comics.service';
import { StateService } from './state/state.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    let stateService: StateService
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [
        StateService,
        ComicsService
      ]
    }).compileComponents();
    stateService = TestBed.inject(StateService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
