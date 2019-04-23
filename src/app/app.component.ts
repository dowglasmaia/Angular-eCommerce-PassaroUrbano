import { Component, OnInit } from '@angular/core';
import { OfertaService } from './services/ofertas.service';

import { Oferta } from './shared/oferta';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OfertaService]
})
export class AppComponent implements OnInit {

  title = 'eCommerce';

  ofertas: Observable<Oferta[]>;

  /* Usando um array para interar com NgFor do template */
  ofertas2: Oferta[];

  oferta: Oferta;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasSerive: OfertaService) { }

  ngOnInit(): void {

    /* switchMap */
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .pipe(
        debounceTime(1000), //executa a ação do switchMap após 1 segundo
        distinctUntilChanged(), // para fazer pesquisas Distintas
        switchMap((termo: string) => {
          console.log('requisição http para api')

          if (termo.trim() === '') {
            //retorna um observable de array de Vazio
            return of([]);
          } else {

            return this.ofertasSerive.pesquisarOfertas(termo);
          }

        }),
        // caso de algun Error
        catchError((error: any) => {
          console.log(error)
          return of([]) // retorna um Array de Ofertas Vazia, Evitando quebra a Aplição.
        })
      )

    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertas2 = ofertas);
    console.log(this.ofertas);
  }


  pesquisa(termoDaBusca: string): void {
    /* Pegando os dados o input do HTML*/
    console.log('key caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);

  }
}
