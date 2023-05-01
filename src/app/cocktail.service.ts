import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
cocktails: Cocktail[] = [
  {name: 'mojito', price: '5$', image: "url/fake.jpeg"}
]
  constructor() { }

  public getCocktails(): Cocktail[] {
    return this.cocktails
  }
}
