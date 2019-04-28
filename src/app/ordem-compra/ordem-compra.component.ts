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


  /* Controle de validação dos campos*/
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  /* estado primitivos dos campo (pristine) */
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean= true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaEstadoPrimitivo: boolean = true;


  constructor() { }

  ngOnInit() {
  }


  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //console.log(this.endereco)

    this.enderecoEstadoPrimitivo = false

    //se a string forma maior q 3 estar valido
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    //console.log(numero)    

    this.numeroEstadoPrimitivo = false
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento)
  }

  public atualizaFormaPgto(formaPgto: string): void {
    this.formaPagamento = formaPgto;
    //console.log(this.formaPagamento)

    this.formaEstadoPrimitivo = false

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

  }
}
