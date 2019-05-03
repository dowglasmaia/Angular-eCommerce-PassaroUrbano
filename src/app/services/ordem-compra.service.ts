import { Oferta } from '../shared/oferta';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


/* importação para convertere de Observable para Promisse*/
import { Pedido } from './../shared/pedido';



@Injectable()
export class OrdemCompraServices {

  constructor(
    private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido) {
    console.log("Comessando a impl Compra") 
   }

}
