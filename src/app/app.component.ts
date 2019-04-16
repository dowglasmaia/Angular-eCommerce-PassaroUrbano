import { Component, OnInit } from '@angular/core';
import { OfertaService } from './services/ofertas.service';

import { Oferta } from './shared/oferta';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertaService]
})
export class AppComponent implements OnInit {

  title = 'eCommerce';

  ofertas: Oferta[];

  oferta: Oferta;

  constructor(private ofertasSerive: OfertaService) { }

  ngOnInit(): void {

    this.oferta = new Oferta();


  }


  pesquisa(termoDaBusca: string): void {
    /* Pegando os dados o input do HTML*/
    this.ofertasSerive.pesquisarOfertas(termoDaBusca).subscribe(obj => {
      this.ofertas = obj;
      console.log(this.ofertas);
    })
  }
}
