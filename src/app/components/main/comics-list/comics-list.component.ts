import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/models/comic';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit, OnDestroy {

  comicsListFiltered: Comic[] = [];
  private comicsListFilteredSubscription: Subscription = new Subscription();
  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.comicsListFilteredSubscription = this.state.changeComicsListFiltered$
      .subscribe((comicsList: Comic[]) => {
        this.comicsListFiltered = comicsList
        console.log('comicsListFiltered: ', this.comicsListFiltered);
      });
  }

  ngOnDestroy(): void {
    this.comicsListFilteredSubscription.unsubscribe();
  }


}
