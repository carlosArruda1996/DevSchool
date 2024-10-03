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
import { FaleConoscoComponent } from './pages/fale-conosco/fale-conosco.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { RoadMapsComponent } from './pages/road-maps/road-maps.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeadComponent,
    FootComponent,
    MenuBarComponent,
    ApresentacaoComponent,
    DocumentacoesComponent,
    FaleConoscoComponent,
    LeftMenuComponent,
    FooterComponent,
    ArtigosComponent,
    BibliotecaComponent,
    RoadMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
