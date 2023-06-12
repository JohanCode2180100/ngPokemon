import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

//const qui permet de declarer les routes dans notre app
//associer le path et le composant
//declarer les routes dans l ordre, de la plus specifique a la plus basique (par defaut)
const routes: Routes = [
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  //redirect vers /pokemons si adresse fausse
  //angular lis les routes du haut vers le bas - ** veut dire erreur
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
