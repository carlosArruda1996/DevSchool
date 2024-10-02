import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { FootComponent } from './components/foot/foot.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import{ApresentacaoComponent} from './components/head/apresentacao/apresentacao.component';
import { DocumentacoesComponent } from './pages/documentacoes/documentacoes.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    MenuBarComponent,
    ApresentacaoComponent,
    DocumentacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
