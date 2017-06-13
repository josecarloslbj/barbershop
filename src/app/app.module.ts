

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';


import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

import { UsuarioModule } from './usuario/usuario.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule,
    UsuarioModule 
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
