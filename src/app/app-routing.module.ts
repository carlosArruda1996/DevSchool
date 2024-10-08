import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocumentacoesComponent} from './pages/documentations/documentacoes.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { BibliotecaComponent } from './pages/library/biblioteca.component';
import { RoadMapsComponent } from './pages/road-maps/road-maps.component';
import { FaleConoscoComponent } from './pages/talk-with-us/fale-conosco.component';
import { EsqueciASenhaComponent } from './components/head/login-page/new-password/esqueci-a-senha.component';
import { TelaCadastroComponent } from './components/head/login-page/new-user/tela-cadastro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'artigos', component : ArtigosComponent},
  {path: 'documentacoes', component : DocumentacoesComponent},
  {path: 'biblioteca', component : BibliotecaComponent},
  {path: 'road-maps', component : RoadMapsComponent},
  {path: 'fale-conosco', component : FaleConoscoComponent},
  {path: 'esqueci-a-senha', component : EsqueciASenhaComponent},
  {path: 'tela-cadastro', component : TelaCadastroComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
