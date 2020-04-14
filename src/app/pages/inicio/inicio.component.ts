import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private arrayColores=["red","blue","purple","pink","green","brown","violet","pink","aqua","orange","olive","teal","cyan","salmon","peach"];
  private pruebas=[
"El/La jugador de mi derecha bebe 2 tragos", 
"Yo nunca  he perreado con BadBunny",
"El/La mas mayor del grupo bebe 3 tragos",
"El/La  menor del grupo bebe 3 tragos",
"El/La mas mayor del grupo mandar beber 6 tragos(repartidos)",
"El/La  menor del grupo mandar beber 6 tragos(repartidos)",
"A votacion popular se eligen 2 jugadores y se tendran que pasar un chupito entre ellos",
"A votacion popular se eligen 2 jugadores y uno de ellos tendra que beber un chupito del omgligo del otro",
"Yo nunca  he tenido sexo en este lugar",
"Los jugadores/as elegiran quien tiene que hacer 3 burpees, si se niega debera beber 5 tragos",
"Yo nunca  he cantado Tusa gritando",
"El/La jugador mas bailonga tiene que bailar teerk durante 5 segundas, si no bebe 4 tragos",
"El/La jugador mas moreno de piel bebe 2 tragos",
"El/La jugador mas blanco de piel bebe 2 tragos",
"Los/Las rubios beben 3 tragos",
"Los/Las rubios reparten 3 tragos",
"Los/Las morenos/as beben 3 tragos",
"Los/Las morenos/asreparten 3 tragos",
"Los/Las miopes beben 3 tragos",
"Los/Las miopes reparten 5 tragos",
"Yo nunca  he tenido sexo en un sitio público",
"Quien es mas probable que pruebe el sado, la persona mas señalada tendra que beber tantos tragos como votos obtenidos",
"Quien creeis que hace el mejor sexo oral,la persona mas señalada tendra que beber tantos tragos como votos obtenidos",
"Yo nunca  he escuchado a mis padres tener sexo",
"Quien es mas probable que se lie con mas de una persona en una noche, la persona mas señalada tendra que beber tantos tragos como votos obtenidos",
"El/La jugador mas mayor bebe tantos tragos como euros tenga en la cartera",
"El/La jugador mas pequeño bebe tantos tragos como euros tenga en la cartera",
"Los/Las jugadores que llever al menor un preservativo en la cartera beben 2 tragos",
"Los/Las jugadores pelirrojos beben 4 tragos",
"Si te han bloqueado de Instagram bebe 2 tragos",
"Yo nunca  he vomitado en este lugar",
"Yo nunca  he pensado que quien tiene el movil es sexy",
"Yo nunca  me he masturbado mas de 3 veces en un dia",
"Yo nunca  he follado mas de 3 veces o mas en un dia",
"Quien es mas probable que rompa algo esta noche,la persona mas señalada tendra que beber tantos tragos como votos obtenidos",
"La persona mas bajita bebe 2 tragos (para que pegue el estirón)",
"Quien es mas probable que haga el ridiculo en publico, la persona mas señalada tendra que beber tantos tragos como votos obtenidos",
"Acepta el reto, si puedes decir 3 veces 'no te rayes Yerry' en 5 segundos manda 6 tragos, si no bebe 2 tragos",
"Yo nunca  he vuelto con mi ex",
"Yo nunca  me he liado con el/la ex de un amigo",
"Yo nunca  me he follado con el/la ex de un amigo",
"Yo nunca  me he tirado un pedo y he dicho que mal huele para despistar",
"Yo nunca  he dicho que me gusta un regalo y luego lo he devuelto",
"Yo nunca  he escrito a mi ex en una noche de fiesta",
"Yo nunca  he hecho pis en una piscina por miedo a que saliera el liquido azul",
"Yo nunca he stalkeado las redes sociales de la pareja de mi ex",
"Yo nunca nunca he estado mas de 3 dias sin ducharme",
"Yo nunca he movido la boca aunque no me sepa la cancion",
"El/La jugador mas alto bebe 3 tragos",
"Yo nunca he cotilleado quien daba like mis ex parejas",
"El/La jugador mas gordito/a hace 5 flexiones, si no bebe 5 tragos",
"Los/Las jugadores que solo fumen de fiesta beben 2 tragos",
"Yo nunca he probado drogas duras"




];

  public titulo : string;
    constructor(private elementRef: ElementRef){
      this.titulo = "Toca para jugar";
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
