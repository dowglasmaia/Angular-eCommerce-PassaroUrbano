import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { OfertaService } from './services/ofertas.service';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,  
    RestauranteComponent,
    DiversaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    
  ],
  providers: [
    OfertaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
