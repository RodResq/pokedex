import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm: null;

  pokemonList = [
    {name: 'Bulbasaur', number: 1},
    {name: 'Chamander', number: 4},
    {name: 'Squirtle', number: 7},
    {name: 'Pikachu', number: 25},
  ];

  constructor() { }

  ngOnInit(): void {
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
