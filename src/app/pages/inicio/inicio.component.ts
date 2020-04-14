import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private arrayColores=["red","yellow","blue","purple","pink","green","brown","violet"];
  private pruebas=["El/La jugador de mi derecha bebe 2 tragos", 
  "Yo nunca nunca he perreado con BadBunny",
"El/La mas mayor del grupo bebe 3 tragos",
"El/La mas menor del grupo bebe 3 tragos",
"El/La mas mayor del grupo mandar beber 6 tragos(repartidos)",
"El/La mas menor del grupo mandar beber 6 tragos(repartidos)",
"A votacion popular se eligen 2 jugadores y se tendran que pasar un chupito entre ellos",
"A votacion popular se eligen 2 jugadores y uno de ellos tendra que beber un chupito del omgligo del otro",
"Yo nunca nunca he tenido sexo en este lugar",
"Los jugadores/as elegiran quien tiene que hacer 3 burpees, si se niega debera beber 5 tragos",
"Yo nunca nunca he cantado Tusa gritando",
"El/La jugador mas bailonga tiene que bailar teerk durante 5 segundas, si no bebe 4 tragos"




];

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
