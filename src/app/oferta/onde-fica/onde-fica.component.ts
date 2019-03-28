import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /* pegando a rota pelo paramentro da rota Pai*/
    console.log('Id da rota pai: ' , this.route.parent.snapshot.params['id']);
  }

}
