import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
  //declarations des vues
  declarations: [AppComponent, PageNotFoundComponent],
  //classes necessaires au fonctionnement du module
  //ATTENTION A LA DECLARATION DES FICHIERS - POKEMON MODULE AVANT APP ROUTINGMODULE
  imports: [BrowserModule, PokemonModule,  AppRoutingModule],
  //permet de fournir un service
  providers: [],
  //le composant racine pour le module racine, bootstrap de l app
  bootstrap: [AppComponent],
})
export class AppModule {}
