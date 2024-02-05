import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { Observable, tap, of ,catchError } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'}
  )
export class PokemonService {

  constructor(private http : HttpClient) {}

  getPokemonList() : Observable<Pokemon[]>{
    //return POKEMONS
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId : number) : Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, undefined))
    );
  }

  searchPokemonList(terme : string) : Observable<Pokemon[]>{
    if (terme.length <= 1) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${terme}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>  this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon : Pokemon) : Observable<null>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>this.handleError(error, null)) 
    );
  }

  addPokemon(pokemon : Pokemon) : Observable<Pokemon>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }; 

    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>this.handleError(error, null)) 
    );
  }


  deletePokemonById(pokemonId : number) : Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) =>this.handleError(error, [])) 
    );
  }

  private log(response : any){
    console.table(response);
  }

  private handleError(error : Error, errorValue : any){
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList() : string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrick',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }

}
