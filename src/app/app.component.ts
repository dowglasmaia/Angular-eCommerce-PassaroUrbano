import { Component, OnInit } from '@angular/core';
import { OfertaService } from './services/ofertas.service';

import { Oferta } from './shared/oferta';
import { Observable, Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertaService]
})
export class AppComponent implements OnInit {

  title = 'eCommerce';

  ofertas: Observable<Oferta[]>;

  oferta: Oferta;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasSerive: OfertaService) { }

  ngOnInit(): void {

    /* switchMap - agiliza nas buscas*/
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(1000), // executa a ação depois do tempo passado
        switchMap((termo: string) => {
        console.log('Requisição HTTP Aqui ');
        return this.ofertasSerive.pesquisarOfertas(termo);
      }))

    // this.oferta = new Oferta();

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }


  pesquisa(termoDaBusca: string): void {
    /* Pegando os dados o input do HTML*/
    console.log('key caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);

  }
}
