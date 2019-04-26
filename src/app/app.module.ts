import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { OfertaService } from './services/ofertas.service';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { TopoComponent } from './topo/topo.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    TopoComponent,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  providers: [{provide:LOCALE_ID, useValue: 'pt' }, // parametrizando o padrão de moeda Brasil
    OfertaService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

/* Registrando o padrão Brasileiro para moedas */
registerLocaleData(localePt);
