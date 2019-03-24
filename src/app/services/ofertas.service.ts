import { Oferta } from '../shared/oferta';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* importação para convertere de Observable para Promisse*/



@Injectable()
export class OfertaService {

  constructor(
    private http: HttpClient) { }


  public getOfertas(): Promise<Oferta[]> {
    return this.http.get("http://localhost:8080/ofertas")
      .toPromise()
      .then((resposta: any) => resposta);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`http://localhost:8080/ofertas/categorias?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta);

  }

  public getOfertasPorId(id: number): Promise<Oferta> {
    return this.http.get(`http://localhost:8080/ofertas/${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta
      });

  }



}
