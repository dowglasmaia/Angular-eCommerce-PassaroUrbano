import { OfertaService } from './../../services/ofertas.service';
import { ActivatedRoute } from '@angular/router';
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
    /* pegando a rota pelo paramentro da rota Pai, e mostarndo detalhes do atributo referenciado*/
    this.ofertaService.getComoUsarOfertaPorID(this.route.parent.snapshot.params['id'])
    .then((descricao: string) => {
      this.comoUsar = descricao;
    });
   

  }

}
