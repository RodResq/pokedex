import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface PokelistResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[]
}

interface Pokemon {
  name: string;
  number: number;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = '//pokeapi.co/api/v2/';

  pokeList = [];

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get<PokelistResponse>(`${this.url}pokemon?limit=1118`)
      .subscribe(response => {
        response.results.forEach(pokemon => {
          pokemon.number = this.getNumberFromUrl(pokemon.url);
        });
        this.pokeList = this.sortPokemon(response.results).filter(pokemon => pokemon.number < 1000);
      })
  }

  private getNumberFromUrl(url) {
    return parseInt(url.replace(/.*\/(\d+)\/$/,'$1'));
  }

  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b) => {
      return (a.number > b.number) ? 1 : -1;
    })
  }
  getPokeList() {
    return this.pokeList;
  }
}
