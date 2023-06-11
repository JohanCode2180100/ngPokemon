import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: `app.component.html`,
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = "Liste de pokemons";
  //typage tableau de pokemon
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  // ne jamais initialiser dans le constructor, les donnees serveur ne vont pas dans le constructor
  // il est vide dans 99% des cas.
  constructor() {}

  ngOnInit() {
    console.table(this.pokemonList);
  }

  //pokemom type en pokemon
  selectPokemon(pokemonsId: number) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonsId
    );
    if (pokemon) {
      console.log(`Vous avez clique sur le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(
        `Le pokemon que vous avez demande n est pas dans la liste dans la liste `
      );
      this.pokemonSelected = pokemon;
    }
  }
}
