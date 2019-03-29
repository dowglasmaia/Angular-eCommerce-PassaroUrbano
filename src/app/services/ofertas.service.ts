import { Oferta } from '../shared/oferta';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

/* importação para convertere de Observable para Promisse*/



@Injectable()
export class OfertaService {



  constructor(
    private http: HttpClient) { }


  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${environment.url_api}/ofertas`)
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${environment.url_api}/ofertas/categorias?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);

  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http.get(`${environment.url_api}/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta
      });

  }

  public getComoUsarOfertaPorID(id: number): Promise<string> {
    return this.http.get(`${environment.url_api}/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) => {
        //console.log(resposta.descricaoOferta)
        return resposta.descricaoOferta;
      })
  }


  public getOndeFicaOfertaPorID(id: number): Promise<string[]> {
    return this.http.get(`${environment.url_api}/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) => {
        //console.log(resposta.descricaoOferta)
        return resposta;
      })
  }


}
