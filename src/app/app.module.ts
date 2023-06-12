import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { borderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-pipe-color.pipe";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  //declarations des vues
  declarations: [
    AppComponent,
    borderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
  ],
  //classes necessaires au fonctionnement du module
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  //permet de fournir un service
  providers: [],
  //le composant racine pour le module racine, bootstrap de l app
  bootstrap: [AppComponent],
})
export class AppModule {}
