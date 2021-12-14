import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsService } from 'src/app/services/comics/comics.service';
import { StateService } from 'src/app/state/state.service';

import { FilterListComponent } from './filters-list.component';

describe('FilterComponent', () => {
  let component: FilterListComponent;
  let fixture: ComponentFixture<FilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        StateService,
        ComicsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
