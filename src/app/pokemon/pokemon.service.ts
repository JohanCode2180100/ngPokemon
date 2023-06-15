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
      tap((response) => this.log(response)),
      //intercepter les erreurs
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonByID(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      //intercepter les erreurs
      catchError((error) => this.handleError(error, undefined))
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

  private log(response: Pokemon[] | Pokemon | undefined) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    //of permet de transformer une donnee simple en un flux de donnee
    return of(errorValue);
  }
}
