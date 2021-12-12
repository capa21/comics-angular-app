import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';
import { ComicsService } from '../services/comics/comics.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private comicsList: Comic[] = [];
  private creatorsList: string[] = [];
  private charactersList: string[] = [];

  constructor(private comicsService: ComicsService) { }

  initializeState(): void {
    this.comicsService.getComics()
      .subscribe((data: any[]) => {
        this.comicsList = data.map((comic: any) => {
          const filteredData = {
            'characters': comic.characters.items.map((item: any) => item.name),
            'creator': comic.creators.items[0]?.name,
            'price': comic.prices[0].price,
            'title': comic.title,
            'srcImage': `${comic.thumbnail.path}.${comic.thumbnail.extension}`
          }
          return filteredData;
        });
        this.setCreatorsList();
        this.setCharactersList();
      })
  }

  private setCreatorsList(): void {
    let creatorsList: string [] = [];
    this.comicsList.forEach((comic: Comic) => {
      if (comic.creator) {
        creatorsList.push(comic.creator);
      }
    })
    this.creatorsList = Array.from(new Set(creatorsList));
    console.log('this.creatorsList: ', this.creatorsList);
  }

  private setCharactersList(): void {
    let charactersList: string [] = [];
    this.comicsList.forEach((comic: Comic) => {
      charactersList = charactersList.concat(comic.characters);
      this.charactersList = Array.from(new Set(charactersList));
    })
    console.log('this.charactersList: ', this.charactersList);
  }


}
