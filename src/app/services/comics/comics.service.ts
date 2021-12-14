import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private url = 'https://gateway.marvel.com:443/v1/public/comics?format=comic&apikey=42e73edf2221354db5a269d167a071c9'

  constructor(private http: HttpClient) { }

  getComics(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
        map((data: any) => data.data.results)
    );
  }
}
