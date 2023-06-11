import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

//const qui permet de declarer les routes dans notre app
//associer le path et le composant
//declarer les routes dans l ordre, de la plus specifique a la plus basique (par defaut)
const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  {
    path: "pokemons/:id",
    component: DetailPokemonComponent,
  },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
