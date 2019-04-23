import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta';
import { OfertaService } from '../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
     /* renderiza a Pagina com a Categoria de Diversão*/
     this.ofertaService.getOfertasPorCategoria('jogos')
     .then((ofertas: Oferta[]) =>{
       this.ofertas = ofertas;
     })
  }

}
