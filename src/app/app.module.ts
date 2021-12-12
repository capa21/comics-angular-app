import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SearchComponent } from './components/header/search/search.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { ComicsListComponent } from './components/main/comics-list/comics-list.component';
import { ComicItemComponent } from './components/main/comic-item/comic-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    ComicsListComponent,
    ComicItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
