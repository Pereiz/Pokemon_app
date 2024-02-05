import { PokemonService } from './../pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',

})
export class SearchPokemonComponent implements OnInit {
  // {..."a".."ab".."abz".."ab".."abc"...}
  searchTerms = new Subject<string>();
  // {...pokemonList(a)..pokemonList(ab)..}
  pokemons$ : Observable<Pokemon[]>

  constructor(
        private router : Router,
        private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }


  search(term : string){
    this.searchTerms.next(term);
  }
  
  goToDetail(pokemon : Pokemon){
    const link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }
}
