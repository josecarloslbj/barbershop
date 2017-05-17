
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';

// import { CursosComponent } from './cursos/cursos.component';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
// import { AlunosComponent } from './alunos/alunos.component';
//import { CursosRountingModule } from './cursos/cursos.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
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
    AlunosModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
