import { Component, Input, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-forms",
  templateUrl: "./pokemon-forms.component.html",
  styleUrls: ["./pokemon-forms.component.css"],
})
export class PokemonFormsComponent implements OnInit {
  //variables pour les types de pokemons
  @Input() pokemon: Pokemon;
  types: string[];

  // injection du service
  constructor(private pokemonService: PokemonService, private router: Router) {}
  //initialisation avec le service
  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    //pokemonTypeList
  }
  //retourne un boolean si le pokemon est du bon type
  hasType(types: string): boolean {
    return this.pokemon.types.includes(types);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    //si checked on affecte le type au pokemon
    if (isChecked) {
      this.pokemon.types.push(type);
      // sinon on retire le type
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }
  //bloquer ou debloquer les checkboxs
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    console.log("Submit Form !");
    // a la soumission on redirige vers le pokemon demande
    this.router.navigate(["/pokemons", this.pokemon.id]);
  }
}
