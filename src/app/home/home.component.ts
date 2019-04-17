import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertaService } from '../services/ofertas.service';
import { Oferta } from '../shared/oferta';
import { Observable, Observer } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers: [OfertaService]
})
export class HomeComponent implements OnInit {


  public ofertas: Oferta[];


  constructor(
    private ofertasServices: OfertaService
  ) { }


  ngOnInit() {
    /* retornado a promise - */
    this.ofertasServices.getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas}),
      () => console.log("Fuxo de Eventos Completos");
  }



}
