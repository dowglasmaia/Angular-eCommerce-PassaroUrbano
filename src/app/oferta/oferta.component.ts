import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class OfertaComponent implements OnInit,OnDestroy {
 
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

  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


}
