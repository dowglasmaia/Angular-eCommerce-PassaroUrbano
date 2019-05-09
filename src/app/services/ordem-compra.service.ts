import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';


/* importação para convertere de Observable para Promisse*/
import { Pedido } from './../shared/pedido';
import { map } from 'rxjs/operators';



@Injectable()
export class OrdemCompraServices {

  constructor(
    private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido) : Observable<any> {
    return this.http.post(
      `${environment.url_api}/pedidos`,
        pedido, 
        environment.httpOptions
      )
      .pipe(map((resposta: Response) => {
        console.log(resposta);
      }));
   }

}
