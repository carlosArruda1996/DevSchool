import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentacoesComponent} from './pages/documentacoes/documentacoes.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

const routes: Routes = [
  {path: 'documentacoes', component : DocumentacoesComponent},
  {path : '', component: CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
