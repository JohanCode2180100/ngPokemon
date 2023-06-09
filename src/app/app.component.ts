import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: `<h1>{{ title }}!</h1>`,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "Liste de pokemons";
  //typage tableau de pokemon
  pokemonList: Pokemon[] = POKEMONS;

  // ne jamais initialiser dans le constructor, les donnees serveur ne vont pas dans le constructor
  // il est vide dans 99% des cas.
  constructor() {}

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[4]);
  }
  //pokemom type en pokemon
  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez clique sur le pokemon ${pokemon.name}`);
  }
}
