import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

//mecanisme d injection des dependances
@Injectable()
//utilisation dans toute l app si 'root'
//supprime si injection dans une partie de l app, voir pokemon.module => providers:[pokemonService]
export class PokemonService {
  //httpClient injection de dependances
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      //tap = clg.log adpate a un observable
      tap((pokemonList) => console.table(pokemonList)),
      //intercepter les erreurs
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getPokemonByID(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.table(pokemon)),
      //intercepter les erreurs
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik",
      "Poison",
      "Fée",
      "Vol",
      "Combat",
      "Psy",
    ];
  }
}
