export interface FilterList {
  characters: string[];
  creators: string[];
  prices: string[]
}

export type FilterInformation = { filterKey: string, filterValue: string };

export enum FilterValue {
  characters = 'characters',
  creators = 'creators',
  prices = 'prices'
}
