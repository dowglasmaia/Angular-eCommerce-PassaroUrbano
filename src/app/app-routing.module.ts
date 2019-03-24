import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';

/* Rotas de Navegação do Sistema*/
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'oferta', component: HomeComponent }, /* Garantindo que a Oferta so seja mostrada com a passagem de Um paramento (ID)*/
  { path: 'oferta/:id', component: OfertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
