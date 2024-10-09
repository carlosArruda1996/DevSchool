import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadComponent } from './components/head/head.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import{ApresentacaoComponent} from './components/head/apresentacao/apresentacao.component';
import { DocumentacoesComponent } from './pages/documentations/documentacoes.component';
import { FaleConoscoComponent } from './pages/talk-to-us/fale-conosco.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { BibliotecaComponent } from './pages/library/biblioteca.component';
import { RoadMapsComponent } from './pages/road-maps/road-maps.component';
import { PostarArtigoComponent } from './pages/artigos/postar-artigo/postar-artigo.component';
import{LoginPageComponent} from './components/head/login-page/login-page.component';
import { TelaCadastroComponent } from './components/head/login-page/new-user/tela-cadastro.component';
import { EsqueciASenhaComponent } from './components/head/login-page/new-password/esqueci-a-senha.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeadComponent,
    MenuBarComponent,
    ApresentacaoComponent,
    DocumentacoesComponent,
    FaleConoscoComponent,
    LeftMenuComponent,
    FooterComponent,
    ArtigosComponent,
    BibliotecaComponent,
    RoadMapsComponent,
    PostarArtigoComponent,
    LoginPageComponent,
    TelaCadastroComponent,
    EsqueciASenhaComponent,
    SharedComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
