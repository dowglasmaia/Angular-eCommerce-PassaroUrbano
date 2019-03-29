import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

 
  constructor(
       private route: ActivatedRoute,
       private ofertaService: OfertaService) { }

  public ondeFica: string[];

  ngOnInit() {
    
    /* pegando a rota pelo paramentro da rota Pai, e mostarndo detalhes do atributo referenciado*/
    this.ofertaService.getOndeFicaOfertaPorID(this.route.parent.snapshot.params['id'])
    .then((descricao: string[]) => {
      this.ondeFica = descricao;
    });
  }

}
