import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  //directive d attribut donc [] sinon nous creerons un composant
  selector: `[PokemonBorderCard]`,
})
export class borderCardDirective {
  //couleur par defaut
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  //ref vers l elenent du DOM
  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }
  //personnaliser la couleur d entree
  @Input("PokemonBorderCard") borderColor: string;
  //utilisation de la propriete dans la methode setBorder

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height} + px`;
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
