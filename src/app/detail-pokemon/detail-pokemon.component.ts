import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //on va demander a l init de l app d aller chercher l ID
    //snapshot permet de recuperer a l instante des parametres map
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }


  goBack() {
    this.router.navigate(["/pokemons"]);
  }
}
