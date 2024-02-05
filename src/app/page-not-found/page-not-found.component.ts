import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center'>
      <!--img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/-->
      <img src="../assets/image-pokemon/007.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
        <button class="btn "><i class="material-icons"></i>  Retourner à l' accueil</button> 
      </a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {


}
