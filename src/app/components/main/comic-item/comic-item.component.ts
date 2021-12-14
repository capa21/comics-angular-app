import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.css']
})
export class ComicItemComponent implements OnInit {
  @Input() comic: Comic = {
    title: '',
    characters: [],
    creator: '',
    price: 0,
    srcImageMobile: '',
    srcImageMedium: '',
    srcImageLarge: '',
    srcSetImages: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
