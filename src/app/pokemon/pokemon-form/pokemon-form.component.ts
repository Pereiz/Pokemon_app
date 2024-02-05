import { Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css',]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon;
  types : string[];
  isAddForm : boolean;


  constructor(
    private pokemonService : PokemonService,
    private router : Router ) { }

  ngOnInit() {
    //Liste des pokemons
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }
  hasType(types: string) : boolean{
    return this.pokemon.types.includes(types);
  }

  selectType($event : Event, types : string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.pokemon.types.push(types);
    } else{
      const index = this.pokemon.types.indexOf(types);
      this.pokemon.types.splice(index,1);
    }
  }

  isTypesValid(types : string) : boolean {

    if (this.pokemon.types.length == 1 && this.hasType(types)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(types)) {
      return false;
    }
    return true;
  }
  onSubmit(){
    if (this.isAddForm) {
      this.pokemonService.addPokemon(this.pokemon)
        .subscribe((pokemon : Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }
  }

}
