import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';
import { FilterList } from '../models/filters';
import { ComicsService } from '../services/comics/comics.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private comicsList: Comic[] = [];
  private comicsListFiltered: Comic[] = [];
  private filtersList: FilterList = { characters: [], creators: [], prices: [] };
  changeComicsListFiltered$: EventEmitter<Comic[]> = new EventEmitter();

  constructor(private comicsService: ComicsService) { }

  initializeState(): void {
    this.comicsService.getComics()
      .subscribe((data: any[]) => {
        this.comicsList = data.map((comic: any) => {
          const transformedData = {
            'characters': comic.characters.items.map((item: any) => item.name),
            'creator': comic.creators.items[0]?.name ? comic.creators.items[0]?.name: '',
            'price': comic.prices[0].price,
            'title': comic.title,
            'srcImage': `${comic.thumbnail.path}.${comic.thumbnail.extension}`
          }
          return transformedData;
        });
        this.setFilters();
        this.setGlobalInformation();
        console.log('this.comicsList: ', this.comicsList);
        //TODO: Asignar la imagen según el dispositivo (tamaño) que carga la app
      })
  }

  private setFilters() {
    this.comicsListFiltered = [...this.comicsList];
    this.setCharactersList();
    this.setCreatorsList();
    this.setPricesList();
  }
  private setCharactersList(): void {
    let charactersList: string [] = [];
    this.comicsList.forEach((comic: Comic) => {
      charactersList = charactersList.concat(comic.characters);
      this.filtersList.characters = Array.from(new Set(charactersList));
    })
  }

  private setCreatorsList(): void {
    let creatorsList: string [] = [];
    this.comicsList.forEach((comic: Comic) => {
      if (comic.creator) {
        creatorsList.push(comic.creator);
      }
    })
    this.filtersList.creators = Array.from(new Set(creatorsList));
  }

  private setPricesList(): void {
    let pricesList: string [] = [];
    this.comicsList.forEach((comic: Comic) => {
      pricesList.push(comic.price.toString());
    })
    this.filtersList.prices = Array.from(new Set(pricesList));
  }

  setGlobalInformation(): void {
    this.comicsList.forEach((comic: Comic) => comic.globalInformation = `${comic.title} ${comic.price.toString()} ${comic.characters.join(' ')} ${comic.creator}`)
  }

  public filterByCreator(creator: string): void {
    this.comicsListFiltered = [...this.comicsList];
    this.comicsListFiltered = this.comicsListFiltered.filter((comic: Comic) => comic.creator === creator);
    this.changeComicsListFiltered$.emit(this.comicsListFiltered);
  }

  public filterByCharacter(character: string): void {
    this.comicsListFiltered = [...this.comicsList];
    this.comicsListFiltered = this.comicsListFiltered.filter((comic: Comic) => comic.characters.includes(character));
    this.changeComicsListFiltered$.emit(this.comicsListFiltered);
  }

  public filterByPrice(price: number): void {
    this.comicsListFiltered = [...this.comicsList];
    this.comicsListFiltered = this.comicsListFiltered.filter((comic: Comic) => comic.price === price);
    this.changeComicsListFiltered$.emit(this.comicsListFiltered);
  }

  public filterByGlobalInformation(textFilter: string): void {
    this.comicsListFiltered = [...this.comicsList];
    this.comicsListFiltered = this.comicsListFiltered.filter((comic: Comic) => comic.globalInformation?.includes(textFilter));
    this.changeComicsListFiltered$.emit(this.comicsListFiltered);
  }

  public getFiltersList(): FilterList {
    return this.filtersList;
  }

}
