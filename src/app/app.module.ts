import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/header/search/search.component';
import { FilterListComponent } from './components/header/filters-list/filters-list.component';
import { ComicsListComponent } from './components/main/comics-list/comics-list.component';
import { ComicItemComponent } from './components/main/comic-item/comic-item.component';
import { FilterItemComponent } from './components/header/filter-item/filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterListComponent,
    ComicsListComponent,
    ComicItemComponent,
    FilterItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
