import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private arrayColores=["red","yellow","blue","purple","pink","green","brown","violet"];
  private pruebas=["El/La jugador de mi derecha bebe 2 tragos", "Yo nunca nunca he perreado con BadBunny"];

  public titulo : string;
    constructor(private elementRef: ElementRef){
      this.titulo = "yo que se";
    } 
    ngAfterViewInit(){ 
    }
    @HostListener('document:click', ['$event'])
    documentClick(event: MouseEvent) {
      let colorAleatorio = this.arrayColores[Math.floor(Math.random() * this.arrayColores.length)];
      let tituloAleatorio = this.pruebas[Math.floor(Math.random() * this.pruebas.length)];
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = colorAleatorio;
        console.log(this.titulo);
        this.titulo = tituloAleatorio;
        console.log(this.titulo);
    }

  ngOnInit(): void {
  }

}
