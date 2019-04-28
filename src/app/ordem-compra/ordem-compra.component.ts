import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  formaPagamento: string = '';

  constructor() { }

  ngOnInit() {
  }


  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco)
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(numero)
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento)
  }

  public atualizaFormaPgto(formaPgto: string): void {
    this.formaPagamento = formaPgto;
    console.log(this.formaPagamento)
  }
}
