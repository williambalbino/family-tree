import { ArvoreService } from './arvore/arvore.service';
import { UsuarioService } from './usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { DetalhePessoaComponent } from './detalhe-pessoa/detalhe-pessoa.component';
import { ArvoreComponent } from './arvore/arvore.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

const rotas: Routes = [
  { path: 'home', component: ArvoreComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'nova-familia', component: PessoaFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalhe-pessoa', component: DetalhePessoaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    PessoaFormComponent,
    DetalhePessoaComponent,
    ArvoreComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [ArvoreService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
