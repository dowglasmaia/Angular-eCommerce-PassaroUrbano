import { OfertaService } from './../../services/ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
      private route: ActivatedRoute,
      private ofertaService: OfertaService
    ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
    /* pegando a rota pelo paramentro da rota Pai, e mostarndo detalhes do atributo referenciado*/
    this.ofertaService.getComoUsarOfertaPorID(parametros.id)
    .then((descricao: string) => {
      this.comoUsar = descricao;
    });
   
  })


  }

}
