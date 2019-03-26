import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

/* Rotas de Navegação do Sistema*/
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'oferta', component: HomeComponent }, /* Garantindo que a Oferta so seja mostrada com a passagem de Um paramento (ID)*/
  
  { path: 'oferta/:id', component: OfertaComponent , 
      /* Rotas Filhas, do Componente Oferta*/
      children: [
        { path: '',component: ComoUsarComponent }, /* Excibe este por Padrão, ao acessar a pagina de ofertas*/
        { path: 'como-usar',component: ComoUsarComponent },
        { path: 'onde-fica',component: OndeFicaComponent }
      ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
