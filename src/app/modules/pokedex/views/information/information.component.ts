import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import {filter, map, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy {
  isAlive: boolean = true;
  pokeNumber: number;
  pokemon: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private pokeApi: PokeapiService) { }
  
  ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(params => {
        this.pokeNumber = parseInt(params.get('idpokemon'));
      })
      this.getPokemon();
  }

  getPokemon() {
    this.pokeApi.getPokemon(this.pokeNumber)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(response => {
        this.pokemon = response
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

}
