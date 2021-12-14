import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Comic } from './models/comic';
import { StateService } from './state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comicList: Comic[] = [];
  constructor(public state: StateService) {
    this.state.initializeState();
  }

  ngOnInit() {
    this.state.initializeState()
  }
}
