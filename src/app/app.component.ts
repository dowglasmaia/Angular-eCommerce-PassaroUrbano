import { Component, OnInit } from '@angular/core';
import { OfertaService } from './services/ofertas.service';

import { Oferta } from './shared/oferta';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators'



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
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(debounceTime(1000)) //executa a ação do switchMap após 1 segundo
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {
        console.log('requisição http para api')

        if (termo.trim() === '') {
          //retorna um observable de array de Vazio
          return of<Oferta[]>([]);
        } else {
          return this.ofertasSerive.pesquisarOfertas(termo);
        }

      }))

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }


  pesquisa(termoDaBusca: string): void {
    /* Pegando os dados o input do HTML*/
    console.log('key caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);

  }
}
