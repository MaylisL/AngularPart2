import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
cocktails: Cocktail[] = []
constructor(public http: HttpClient) {}

getCocktails(): Observable<Cocktail[]> {
  return this.http.get<Cocktail[]>("assets/cocktails.json");
}
}
