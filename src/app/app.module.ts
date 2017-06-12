

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
// import { CursosComponent } from './cursos/cursos.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
// import { UsuarioComponent } from './usuario/usuario.component';
// import { AlunosComponent } from './alunos/alunos.component';
//import { CursosRountingModule } from './cursos/cursos.routing.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    //UsuarioComponent,
    //CursosComponent,
    //AlunosComponent
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
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
