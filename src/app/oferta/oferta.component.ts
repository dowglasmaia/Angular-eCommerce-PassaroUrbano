import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    /* pegando os dados da roa ativa, o parametro deve ser o da Rota, no caso aqui o (oferta/:id) */
    console.log('ID recuperado da rota:', this.route.snapshot.params['id']);
  }

}
