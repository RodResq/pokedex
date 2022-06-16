import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './../../../../services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchFilter: string = '';
  selectedPkm: null;
  urlImagemPokemom: string =  '//serebii.net/pokedex-xy/icon/';

  constructor(private pokeapi: PokeapiService) { }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  get pokemonList() {
    return this.pokeapi.getPokeList().filter(pokemon => pokemon.name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) != -1);
  }

  get pkmSprite() {
    // @ts-ignore
    const number = ('000' + this.selectedPkm.number).slice(-3)
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  // tslint:disable-next-line:typedef
  selectPkm(pkm: any) {
    this.selectedPkm = pkm;
  }
}
