import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-edit-pokemon",
  template: ` <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center"><img [src]="pokemon.picture" alt="" /></p>
    <app-pokemon-forms
      *ngIf="pokemon"
      [pokemon]="pokemon"
    ></app-pokemon-forms>`,
  styles: [],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}
  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonByID(+pokemonId);
    } else {
      this.pokemon = undefined;
    }
  }
}
