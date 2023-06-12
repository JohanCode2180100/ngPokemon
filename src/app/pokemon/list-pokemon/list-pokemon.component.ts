import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { OnInit } from "@angular/core";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent implements OnInit {
  // on  importe ce morceau de code car nous avons mis notre html du app.component dans list pokemon
  pokemonList: Pokemon[];
  // declaration du service
  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }
  goBack(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.id]);
  }
}
