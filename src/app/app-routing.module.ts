import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'restaurante', component: RestauranteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
