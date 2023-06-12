import { Component } from "@angular/core";

@Component({
  selector: "app-page-not-found",
  template: ` <div class="center">
<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png">
<h1>CETTE PAGE N EXISTE PAS</h1>
<a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">Retourner a l accueil</a>

  </div>`,
  styles: [],
})
export class PageNotFoundComponent {}
