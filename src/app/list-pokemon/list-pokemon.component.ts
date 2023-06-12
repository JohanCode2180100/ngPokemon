import { Component } from "@angular/core";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent {

  // on  importe ce morceau de code car nous avons mis notre html du app.component dans list pokemon
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goBack(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
