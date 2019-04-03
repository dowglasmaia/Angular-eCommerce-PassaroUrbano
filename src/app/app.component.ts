import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'eCommerce';

  constructor() { }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  pesquisa(termoDaBusca: string): void {
    /* Pegando os dados o input do HTML*/
    console.log(termoDaBusca)
  }
}
