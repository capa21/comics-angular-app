import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCtrl = new FormControl('', []);

  constructor(private state: StateService) {
    this.searchCtrl.valueChanges
    .pipe( debounceTime(500) )
    .subscribe(value => {
      this.state.filterByGlobalInformation(value);
    });
  }

  ngOnInit(): void {
  }

  reloadOriginalsComics() {
    this.state.reloadOriginalsComics();
  }
}
