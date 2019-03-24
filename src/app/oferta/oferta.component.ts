import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

 // private route: ActivatedRoute;

  constructor(private route: ActivatedRoute) {
    //this.route = route;
  }

  ngOnInit() {
    /* pegando os dados da rota ativa com o 'SNAPSHORT', o parametro deve ser o da Rota, no caso aqui o (oferta/:id) */
   // console.log('ID recuperado da rota:', this.route.snapshot.params['id']);

    /* pegando os dados da rota ativa com o 'SUBSCRIBE', passando o id como parametro*/
    this.route.params.subscribe((parametro : any) => {
      console.log(parametro.id);
    })
  }

}
