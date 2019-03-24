import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { OfertaService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertaService
  ) {

  }

  ngOnInit() {
    this.ofertaService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(oferta)
      })








    /* pegando os dados da rota ativa com o 'SNAPSHORT', o parametro deve ser o da Rota, no caso aqui o (oferta/:id) */
    //console.log('ID recuperado da rota:', this.route.snapshot.params['id']);

    /* pegando os dados da rota ativa com o 'SUBSCRIBE', passando o id como parametro*/
    //this.route.params.subscribe((parametro : any) => {
    // console.log(parametro.id);
    //})
  }

}
