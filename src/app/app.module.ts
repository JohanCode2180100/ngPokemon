import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
//import du service API cree
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  //declarations des vues
  declarations: [AppComponent, PageNotFoundComponent],
  //classes necessaires au fonctionnement du module
  //ATTENTION A LA DECLARATION DES FICHIERS - POKEMON MODULE AVANT APP ROUTINGMODULE
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      //false pour ne pas encapsuler nos elements de reponses dans un element DATA
      dataEncapsulation: false,
    }),
    PokemonModule,
    AppRoutingModule,
  ],
  //permet de fournir un service
  providers: [],
  //le composant racine pour le module racine, bootstrap de l app
  bootstrap: [AppComponent],
})
export class AppModule {}
