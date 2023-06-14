import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { borderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-pipe-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { FormsModule } from "@angular/forms";
import { PokemonFormsComponent } from "./pokemon-forms/pokemon-forms.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";

const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id", component: EditPokemonComponent },
  { path: "pokemons", component: ListPokemonComponent },
  {
    path: "pokemons/:id",
    component: DetailPokemonComponent,
  },
];
@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    borderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormsComponent,
    EditPokemonComponent,
  ],
  //route fille => forChild
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
