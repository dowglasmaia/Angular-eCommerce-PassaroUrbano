import {Component, OnInit }from '@angular/core';
import {OfertaService }from '../services/ofertas.service';
import {Oferta }from '../shared/oferta';


@Component( {
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css'],
  //providers: [OfertaService]
})
export class HomeComponent implements OnInit {

public ofertas:Oferta[];


  constructor(
    private ofertasServices:OfertaService
  ) {}


  ngOnInit() {

    //this.ofertas = this.ofertasServices.getOfertas();

   // console.log(this.ofertas);

    /* retornado a promise*/
    this.ofertasServices.getOfertas2().then((ofertas: Oferta[]) => {
      this.ofertas = ofertas;
    });

  }

}
