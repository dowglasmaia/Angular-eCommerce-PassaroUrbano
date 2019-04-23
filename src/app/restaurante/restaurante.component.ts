import { Oferta } from './../shared/oferta';
import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../services/ofertas.service';


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertaService]
})
export class RestauranteComponent implements OnInit {

  public ofertas: Oferta[];

  /* Testando Pipes  para data*/
  public dataTest: any = new Date(2019, 0, 30);

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    /* renderiza a Pagina com a Categoria de Restaurante*/
    this.ofertaService.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) =>{
      this.ofertas = ofertas;
    })
  }

}
