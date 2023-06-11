import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { borderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-pipe-color.pipe";
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [AppComponent, borderCardDirective, PokemonTypeColorPipe, ListPokemonComponent, DetailPokemonComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
