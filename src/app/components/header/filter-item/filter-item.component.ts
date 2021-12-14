import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterInformation, FilterValue } from 'src/app/models/filters';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  title: string = '';
  @Input() filterKey: string = '';
  @Input() filterValues: string[] = [];
  @Output() filterValue: EventEmitter<FilterInformation> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.filterKey === FilterValue.characters) {
      this.title = 'Personajes'
    }
    if (this.filterKey === FilterValue.creators) {
      this.title = 'Creadores'
    }
    if (this.filterKey === FilterValue.prices) {
      this.title = 'Precios'
    }
  }

  sendInformation(filterValue: string) {
    this.filterValue.emit({filterKey: this.filterKey, filterValue})
  }

}
