import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterInformation } from 'src/app/models/filters';



@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {

  @Input() filterKey: string = '';
  @Input() filterValues: string[] = [];
  @Output() filterValue: EventEmitter<FilterInformation> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendInformation(filterValue: string) {
    this.filterValue.emit({filterKey: this.filterKey, filterValue})
  }

}
