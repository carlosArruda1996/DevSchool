import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentacoesComponent} from './pages/documentacoes/documentacoes.component';

const routes: Routes = [
  {path: 'documentacoes', component : DocumentacoesComponent},
  {path: '', redirectTo : "/documentacoes", pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
