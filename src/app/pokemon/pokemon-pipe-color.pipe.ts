import { Pipe, PipeTransform } from "@angular/core";

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({ name: "pokemonTypeColor" })
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    //switch permettant d afficher la couleur selon le type
    switch (type) {
      case "Feu":
        color = "red darken-2";
        break;
      case "Eau":
        color = "blue lighten-1";
        break;
      case "Plante":
        color = "green lighten-1";
        break;
      case "Insecte":
        color = "brown lighten-1";
        break;
      case "Normal":
        color = "blue-grey lighten-5";
        break;
      case "Vol":
        color = "blue lighten-3";
        break;
      case "Poison":
        color = "deep-purple accent-1";
        break;
      case "Fée":
        color = "pink lighten-4";
        break;
      case "Psy":
        color = "deep-purple darken-2";
        break;
      case "Electrik":
        color = " yellow accent-2";
        break;
      case "Combat":
        color = "deep-orange";
        break;
      default:
        color = "grey";
        break;
    }
    //chip est une classe Materialize permettant d afficher un rond
    return "chip " + color;
  }
}
