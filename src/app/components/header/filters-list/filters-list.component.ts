import { Component, OnInit } from '@angular/core';
import { FilterInformation, FilterList, FilterValue } from 'src/app/models/filters';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.css']
})
export class FilterListComponent implements OnInit {

  filtersList: FilterList = {characters: [], creators: [], prices: []};

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.filtersList = this.state.getFiltersList();
  }

  filterState(filterInformation: FilterInformation) {
    if (filterInformation.filterKey === FilterValue.characters) {
      this.state.filterByCharacter(filterInformation.filterValue);
    }
    if (filterInformation.filterKey === FilterValue.creators) {
      this.state.filterByCreator(filterInformation.filterValue);
    }
    if (filterInformation.filterKey === FilterValue.prices) {
      this.state.filterByPrice(Number(filterInformation.filterValue));
    }
  }

}
