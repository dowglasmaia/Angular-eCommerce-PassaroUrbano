import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /* pegando a rota pelo paramentro da rota Pai*/
    console.log('Id da rota pai: ' , this.route.parent.snapshot.params['id']);
  }

}
