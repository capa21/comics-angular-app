import { Component, OnInit } from '@angular/core';
import { StateService } from './state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private stateService: StateService) { }

  comics: any = [{}];
  characters: any = {};
  creators: any = {};

  ngOnInit(): void {
    this.stateService.initializeState();

  }
}
